<template>
  <div class='container'>
    <!-- <span class="left text">{{min}}</span> -->
    <div class="line_wrapper zl-theme-bg" ref="line_wrapper">
      <div class="bg_line">
        <div class="left_line" :style="{width:minValueLeft + 'px'}"></div>
        <div class="right_line" :style="{left:maxValueLeft == '100%' ? maxValueLeft : maxValueLeft + 'px'}"></div>
      </div>
      <div class="left_dot dot" 
        @touchstart="move($event,'min')" 
        :style="{left:minValueLeft+ 'px'}"
        v-show="maxValueTemp> step *3">
        <span>{{minValueTemp}}</span>
      </div>
      <div class="right_dot dot" 
        @touchstart="move($event,'max')" 
        :style="{left:maxValueLeft == '100%' ? maxValueLeft : maxValueLeft + 'px'}" 
        v-show="minValueTemp< maxValue-step">
        <span>{{maxValueTemp >= max ? maxValueTemp-step + '+' : maxValueTemp}}</span>
      </div>
    </div>
    <!-- <span class="right text">{{max-step}}+</span> -->
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return{
      minValueTemp:0,
      maxValueTemp:100,
      minValueLeft:0,
      maxValueLeft:'100%',
      lineWrapper:''
    }
  },
  computed: {
  },
  watch: {

  },
  methods: {
    move(ev, name){
      // 按下时的位置
      let disX = ev.touches[0].clientX - ev.target.offsetLeft;
      // 共分成多少步划完
      let lotValue = (this.max - this.min) / this.step
      // 计算每步距离
      let lotDis = Math.floor(this.lineWrapper / lotValue)
      // 计算最大值和最小值间距
      let space = lotDis * (this.point+1);
      if(this.maxValueLeft == '100%'){ 
        this.maxValueLeft = this.lineWrapper
      }
      document.ontouchmove = (e) => {
        // 记录移动时位置
        let direction = e.touches[0].clientX - ev.target.offsetLeft
        // 记录移动距离
        let distance = direction - disX
        if(Math.abs(distance) >= lotDis){
          if(distance > 0){
            if(name == 'min'){
              if(this.maxValueLeft >= this.lineWrapper){
                if(this.maxValueLeft-this.minValueLeft >= lotDis*(this.point-1)){
                  this.minValueLeft += lotDis
                  this.minValueTemp += this.step
                }
              }else{
                if(this.maxValueLeft-this.minValueLeft >= space){
                  this.minValueLeft += lotDis
                  this.minValueTemp += this.step
                }
              }
            }else if(name == 'max'){
              this.maxValueLeft += lotDis 
              this.maxValueTemp += this.step
            }
            if(this.maxValueLeft >= this.lineWrapper){
              this.maxValueLeft = this.lineWrapper
              this.maxValueTemp = this.max
            }
          }else if(distance < 0){
            
            if(name == 'min'){
              this.minValueLeft -= lotDis
              this.minValueTemp -= this.step
            }else if(name == 'max'){
              if(this.maxValueLeft-this.minValueLeft >= space){
                this.maxValueLeft -= lotDis
                this.maxValueTemp -= this.step
              }
            }
            if(this.minValueLeft <= 0){
              this.minValueLeft = 0
              this.minValueTemp = 0
            }
          }
          if(name == 'min'){
            this.$emit('min-move',this.minValueTemp)
          }else if(name == 'max'){
            this.$emit('max-move',this.maxValueTemp)
          }
        }
      }
      document.ontouchend = (e) => {
        document.ontouchstart = null;
        document.ontouchmove = null;
      };
    },
    // 根据所给的最大值和最小值获取当前画过的距离
    getRangeLeft(){
      this.lineWrapper = this.$refs.line_wrapper.offsetWidth
      this.$nextTick(()=>{
        this.maxValueTemp = this.max 
        // 最小值和最大值
        this.minValueTemp = this.minValue
        this.maxValueTemp = this.maxValue
        // 共分成多少步划完
        let lotValue = (this.max - this.min) / this.step
        // 计算每步距离
        let lotDis = Math.floor(this.lineWrapper / lotValue)
        // 计算当前划过的距离
        this.minValueLeft = this.minValue / this.step * lotDis
        this.maxValueLeft = this.maxValue / this.step * lotDis
        if(this.maxValue >= this.max){
          this.maxValueLeft = this.lineWrapper
        }
      })
    }
  },
  mounted() {

  },
  watch:{
    status:{
      handler(val){
        if(val){
          this.getRangeLeft()
        }
      }
    },
    minValue:{
      handler(val){
        this.getRangeLeft()
      },
      deep:true
    },
    maxValue:{
      handler(val){
        this.getRangeLeft()
      },
      deep:true
    }
  },
  props: {
    step:{
      type:[String, Number],
      default:1
    },
    min:{
      type:[String, Number],
      default:0
    },
    max:{
      type:[String, Number],
      default:100
    },
    minValue:{
      type:[String, Number],
      default:0
    },
    maxValue:{
      type:[String, Number]
    },
    space:{
      type:[String, Number],
      default:10
    },
    point:{
      type:[String, Number],
      default:10
    },
    status:{
      type:Boolean,
      default:true
    }
  },
  destroyed() {

  },
}
</script>

<style lang='scss' scoped>
  .container{
    width: 100%;
    margin: 0 auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .line_wrapper{
      width: 74%;
      height:4px;
      border-radius:2px;
      background: rgb(17,55,160);
      position: relative;
      margin: auto;
      .bg_line{
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height:100%;
        overflow: hidden;
        border-radius:2px;
        .left_line{
          height:100%;
          background: #eee;
          border-radius:4px;
          width: 0;
          position: absolute;
          left: 0;
          z-index: 0;
          transition: width .4s ease;
        }
        .right_line{
          height:100%;
          background: #eee;
          width: 100%;
          position: absolute;
          border-radius:4px;
          z-index: 0;
          transition: left .4s ease;
        }
      }
      .dot{
        background-color: #fff;
        border-radius: 100%;
        height: 30px;
        top: -13px;
        position: absolute;
        width: 30px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        text-align: center;
        line-height: 30px;
        transition: left .3s ease;
        span{
          position: absolute;
          top:-25px;
          transform: translateX(-50%);
          font-size: 12px;
        }
      }
      .left_dot{
        transform: translateX(-50%);
      }
      .right_dot{
        transform: translateX(-50%);
      }
    }
    .text{
      font-size: 12px;
      color: #666;
    }
  }
</style>
