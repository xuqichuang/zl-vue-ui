/*
 * @Author: 徐其闯 
 * @Date: 2019-02-01 18:04:39 
 * @Last Modified by: 徐其闯
 * @Last Modified time: 2019-03-04 11:36:12
 */

<template>
<transition name="fade">
  <div class='container' v-show="status" @click.stop="hide">
    <transition name="slide">
      <div class="content-container" v-show="status" @click.stop="">
        <div class="top">
          <div class="close" :style="{color:color}" @click.stop="hide">{{close}}</div>
          <div class="title">{{title}}</div>
        </div>
        <div class="week">
          <div v-for="item in week" :key="item" class="week-items">
            {{item}}
          </div>
        </div>
        <div class="scroll-content" ref="container">
          <div class="scroll-container" :style="{'padding-bottom': months * 10 + 'px'}">
            <div v-for="(item, index) in calendarInit" :key="index" class="main-content">
              <div class="year-month">
                {{item.month}}
              </div>
              <div class="day-container">
                <div v-for="(list, key) in item.dayList" :key="key" 
                  @click.stop="daySelected(list)"
                  class="day-list" 
                  :class="{
                    'prevent-stop':list.timeStamp < todayStamp,
                    'start-day': type == 'double' && selectedDay[0] && list.exactDate == selectedDay[0].exactDate,
                    'through-day': type == 'double' && selectedDay[0] && selectedDay[1] && list.timeStamp > selectedDay[0].timeStamp && list.timeStamp < selectedDay[1].timeStamp,
                    'end-day': type == 'double' && selectedDay[1] && list.exactDate == selectedDay[1].exactDate,
                    'one-day': type != 'double' && selectedDay[0] && list.exactDate == selectedDay[0].exactDate,
                  }"
                  :style="{
                    'margin-left': key ==0 ? list.week * 14.285 +'%' : 0,
                    'background': selectedDay[0] && list.exactDate == selectedDay[0].exactDate 
                      || selectedDay[1] && list.exactDate == selectedDay[1].exactDate? color : 
                      (type == 'double' && selectedDay[0] && selectedDay[1] 
                      && list.timeStamp > selectedDay[0].timeStamp && list.timeStamp < selectedDay[1].timeStamp ? lightColor: '')
                    }">
                  <p class="holiday-day"
                    :style="{
                      'color':selectedDay[0] && list.exactDate == selectedDay[0].exactDate || selectedDay[1] && list.exactDate == selectedDay[1].exactDate? '' : color
                    }">
                    {{list.holiday}}
                  </p>
                  <p>{{list.yesterToTomorrow || list.festival || list.day}}</p>
                  <p class="selected-day" v-show="type == 'double' && selectedDay[0] && list.exactDate == selectedDay[0].exactDate">{{selectedText[0]}}</p>
                  <p class="selected-day" v-show="type == 'double' && selectedDay[1] && list.exactDate == selectedDay[1].exactDate">{{selectedText[1]}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</transition>
</template>

<script>
import moment from 'moment';
import BScroll from 'better-scroll'
export default {
  components: {
    BScroll
  },
  data() {
    return{
      status:false,
      week: ['日','一','二','三','四','五','六'],
      todayStamp: moment().subtract(1, 'd').unix(),
      selectedDay:[]
    }
  },
  computed: {
    holidays(){
      let holidays = {
        // 2019
        "2019-02-04": "假",
        "2019-02-05": "假",
        "2019-02-06": "假",
        "2019-02-07": "假",
        "2019-02-08": "假",
        "2019-02-09": "假",
        "2019-02-10": "假",
        "2019-04-05": "假",
        "2019-04-06": "假",
        "2019-04-07": "假",
        "2019-05-01": "假",
        "2019-06-07": "假",
        "2019-06-08": "假",
        "2019-06-09": "假",
        "2019-08-07": "假",
        "2019-09-13": "假",
        "2019-09-14": "假",
        "2019-09-15": "假",
        "2019-10-01": "假",
        "2019-10-02": "假",
        "2019-10-03": "假",
        "2019-10-04": "假",
        "2019-10-05": "假",
        "2019-10-06": "假",
        "2019-10-07": "假",
        "2019-12-30": "假",
        "2019-12-31": "假",
        // 2020
        "2020-01-01": "假",
        "2020-01-24": "假",
        "2020-01-25": "假",
        "2020-01-26": "假",
        "2020-01-27": "假",
        "2020-01-28": "假",
        "2020-01-29": "假",
        "2020-01-30": "假",
        "2020-04-04": "假",
        "2020-04-05": "假",
        "2020-04-06": "假",
        "2019-05-01": "假",
        "2020-06-25": "假",
        "2020-06-26": "假",
        "2020-06-27": "假",
        "2020-10-01": "假",
        "2020-10-02": "假",
        "2020-10-03": "假",
        "2020-10-04": "假",
        "2020-10-05": "假",
        "2020-10-06": "假",
        "2020-10-07": "假",
        "2020-10-08": "假",
      }
      return holidays;
    },
    festivals(){
      let festivals = {
        // 2019
        "2019-02-04": "除夕",
        "2019-02-05": "春节",
        "2019-02-19": "元宵",
        "2019-04-05": "清明",
        "2019-05-01": "劳动",
        "2019-06-07": "端午",
        "2019-08-07": "七夕",
        "2019-09-13": "中秋",
        "2019-10-07": "重阳",
        // 2020
        "2020-01-24": "除夕",
        "2020-01-25": "春节",
        "2020-02-08": "元宵",
        "2020-04-04": "清明",
        "2019-05-01": "劳动",
        "2020-06-25": "端午",
        "2020-08-25": "七夕",
        "2020-10-01": "中秋",
        "2020-10-25": "重阳"
      }
      return festivals;
    },
    calendarInit(){
      let m = moment('2019-02').daysInMonth(); // 天数，月
      let j = moment().endOf('month').format('YYYY年MM月DD日'); // 结束时间 
      let calendarInit = [];
      for(let i = 0; i< this.months; i++){
        let months = moment().add(i, 'months')
        calendarInit.push({
          month: months.format('YYYY年MM月'),
          dayLeft:months.format('d'),
          dayList:[]
        })
        let dayLength = months.startOf('month').daysInMonth()
        let yesterToTomorrow = '';
         // 添加昨天今天明天
        if(months.format('L') == moment().subtract(2, 'd').format('L')){
          yesterToTomorrow = '前天'
        }else if(months.format('L') == moment().subtract(1, 'd').format('L')){
          yesterToTomorrow = '昨天'
        }else if(months.format('L') == moment().format('L')){
          yesterToTomorrow = '今天'
        }else if(months.format('L') == moment().add(1, 'd').format('L')){
          yesterToTomorrow = '明天'
        }else if(months.format('L') == moment().add(2, 'd').format('L')){
          yesterToTomorrow = '后天'
        }
        calendarInit[i].dayList.push({
          yesterToTomorrow:yesterToTomorrow,
          day:months.format('D'),
          festival:this.festivals[months.format('YYYY-MM-DD')],
          holiday:this.holidays[months.format('YYYY-MM-DD')],
          extraWork:'',
          exactDate:months.format('YYYY-MM-DD'),
          timeStamp:months.unix(),
          week:months.format('d'),
        })
        for(let j = 0; j < dayLength-1; j++){
          calendarInit[i].dayList.push({
            yesterToTomorrow:'',
            day:months.add(1, 'd').format('D'),
            festival:this.festivals[months.format('YYYY-MM-DD')],
            holiday:this.holidays[months.format('YYYY-MM-DD')],
            extraWork:'',
            exactDate:months.format('YYYY-MM-DD'),
            timeStamp:months.unix(),
            week:months.format('d')
          })
          // 添加昨天今天明天
          if(months.format('L') == moment().subtract(2, 'd').format('L')){
            calendarInit[i].dayList[j+1].yesterToTomorrow = '前天'
          }else if(months.format('L') == moment().subtract(1, 'd').format('L')){
            calendarInit[i].dayList[j+1].yesterToTomorrow = '昨天'
          }else if(months.format('L') == moment().format('L')){
            calendarInit[i].dayList[j+1].yesterToTomorrow = '今天'
          }else if(months.format('L') == moment().add(1, 'd').format('L')){
            calendarInit[i].dayList[j+1].yesterToTomorrow = '明天'
          }else if(months.format('L') == moment().add(2, 'd').format('L')){
            calendarInit[i].dayList[j+1].yesterToTomorrow = '后天'
          }
        }
      }
      return calendarInit;
    }
  },
  watch: {
    
  },
  methods: {
    // 滚动组件初始化
    scrollInit (scroll, container) {
      this.$nextTick(() => {
        //$refs绑定元素
        if (!scroll) {
          scroll = new BScroll(container, {
            //开启点击事件 默认为false
            click: true,
            scrollY: true,
            momentum: true, // 滑动惯性
            hasVerticalScroll: true,
            stopPropagation:true,
            
            // scrollbar: {
            //   fade: true,
            //   interactive: false // 1.8.0 新增
            // }
          })
        } else if (!container) {
          return;
        } else {
          scroll.refresh()
        }
      })
    },
    show(){
      this.status = true;
      this.scrollInit(this.scroll, this.$refs.container)
    },
    hide(){
      this.status = false
    },
    init(){
      if(this.type == 'double'){
        this.selectedDate.forEach(item =>{
          this.selectedDay.push({
            day:moment(new Date(item)).format('D'),
            exactDate:item,
            timeStamp:moment(new Date(item)).unix(),
            week:moment(new Date(item)).format('d')
          })
        })
      }
    },
    daySelected(list){
      if(list.timeStamp < this.todayStamp){
        
      }else{
        if(this.type == 'double'){
          if(this.selectedDay.length == 0){
            // 
            this.selectedDay.push(list)
          }else if(this.selectedDay.length == 1){
            // 当选中的数组数量等于一时，小于第一个选择的时间就替换数组第一个，大于第一个就在数组中添加第二个值
            if(list.timeStamp > this.selectedDay[0].timeStamp){
              this.selectedDay.push(list)
            }else{
              this.selectedDay = []
              this.selectedDay.push(list)
            }
          }else if(this.selectedDay.length == 2){
            // 可以一直添加
            // if(list.timeStamp > this.selectedDay[0].timSetamp){
            //   this.selectedDay.splice(1,1,list)
            // }else{
            //   this.selectedDay.splice(0,1,list)
            // }

            // 数组等于二就替换当前数组
            this.selectedDay.splice(0,2,list)
          }
        }
        // console.log(this.selectedDay)
        this.$emit('change', this.selectedDay)
      }
    }
  },
  mounted() {
    // this.scrollInit(this.scroll2, this.$refs.container)
    this.init()
  },
  props: {
    close:{
      type: String,
      default:'×'
    },
    color:{
      type: String,
      default:'rgb(17,55,160)'
    },
    lightColor:{
      type: String,
      default: `rgb(17,55,160,.15)`
    },
    title:{
      type: String,
      default:'选择日期'
    },
    months:{
      type: [Number,String],
      default:6
    },
    type:{
      type: String,
      default: 'double', // start 开始, end 结束, double 双选
    },
    selectedDate:{
      type: Array,
      default(){
        return [
          moment().format('YYYY-MM-DD'),
          moment().add(1, 'd').format('YYYY-MM-DD')
        ]
      }
    },
    selectedText:{
      type:Array,
      default(){
        return ['入店','离店']
      }
    }
  },
  destroyed() {

  },
}
</script>

<style lang='scss' scoped>
// fade
.fade-enter-active, .fade-leave-active {
  transition: background .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
  -webkit-transform: translateY(0vh);
  transform: translateY(0vh);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  -webkit-transform: translateY(100vh);
  transform: translateY(100vh);
}
.container{
  position: fixed;
  width: 100%;
  left:0;
  top:0;
  right: 0;
  height:100vh;
  transition: all .3s ease;
  background:rgba(0, 0, 0, .6);
  .content-container{
    width: 100%;
    left:0;
    bottom:0;
    right: 0;
    position: absolute;
    background: #fff;
    overflow: hidden;
    height: 80vh;
    border-radius:12px 12px 0 0;
    .top{
      position: absolute;
      top: 0;
      width: 100%;
      height:40px;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 10;
      .close{
        font-size: 20px;
        position: absolute;
        left:10px;
        top: 50%;
        transform: translateY(-50%);
      }
      .title{
        text-align: center;
        line-height: 40px;
        font-size: 16px;
      }
    }
    .week{
      position: absolute;
      top: 40px;
      width: 100%;
      height: 20px;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
      background: #fff;
      .week-items{
        flex: 1;
        text-align: center;
        &:first-child, &:last-child{
          color: rgb(17,55,160);
        }
      }
    }
    .scroll-content{
      margin-top: 60px;
      margin-bottom: 100px;
      min-height: 100%;
      overflow: hidden;
      .scroll-container{
        position: absolute;
        width: 100%;
        .main-content{
          border-bottom: 10px solid #f5f5f5;
          &:last-child{
            border-bottom: 0;
          }
          .year-month{
            text-align: center;
            height: 30px;
            line-height: 30px;
            position: relative;
            width: 100%;
            background: #fff;
            &:after{
              position: absolute;
              height:100%;
              width: 100%;
              left: 0;
              bottom:0;
              content:'';
              -webkit-transform-origin: 0 100%;
              transform-origin: 0 100%;
              -webkit-transform: scaleY(0.5);
              transform: scaleY(0.5);
              border-bottom:1px solid #ddd;
            }
          }
          .day-container{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            text-align: center;
            background: #fff;
            .day-list{
              width: 14.285%;
              height: 52px;
              position: relative;
              font-size: 14px;
              line-height: 15px;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              &.prevent-stop{
                color: #ccc;
              }
              &.start-day,&.end-day{
                border-radius: 2px 0 0 2px;
                color:#fff;
              }
              &.end-day{
                border-radius: 0 2px 2px 0;
              }
              &.through-day{
                background: #c9d8ff;
              }
              &.one-day{
                border-radius: 2px;
              }
              .selected-day,.holiday-day{
                font-size: 10px;
              }
            }
            
          }
        }
      }
    }
  }
}
</style>
