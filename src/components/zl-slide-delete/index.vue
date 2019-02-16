<!-- author: 徐其闯 -->
<template>
<div>
  <div 
    v-for="(list, index) in options" 
    :key="index"
    class="list" @touchstart="handleComponent($event,list)"
    @click.stop="leftClick(list)">
    <div class="swiper" :style="{left: list.bigSwiper}">
      <div class="swipeLeft" @click.stop="swiperRight(list)">
        <div v-show="left !== 'none'" class="left-img">
          <img class="type" 
          :src="leftImgOptions.img" 
          :style="{
            width: leftImgOptions.width,
            height: leftImgOptions.height
          }"
          alt="" v-if="left === 'editor'">
        </div>
        <div class="ticket" 
          :class="{
            'no-left-img':left === 'none'
          }"
          :style="{
            width: left === 'none'? '85%': '70%'
          }">
          <div v-if="list.title" class="title">
            {{list.title}}
          </div>
          <div v-for="item in list.content" :key="item">
            {{item}}
          </div>
        </div>
        <div class="checkbox-wrapper" v-show="right !== 'none'">
          <img class="checkbox" 
          :src="rightImgOptions.img" 
          :style="{
            width: leftImgOptions.width,
            height: leftImgOptions.height
          }"
          alt="" v-if="right === 'editor'" @click.stop="rightClick(list)">
        </div>
      </div>
      <div class="cancle zl-second-btn" @click.stop="deleteFn(index)">删除</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return{
      
    }
  },
  components: {
    
  },
  watch: {
  },
  methods: {
    handleComponent(e,list){
      let startX = e.changedTouches[0].clientX;
      e.target.ontouchmove = (e) =>{
        let moveX = e.changedTouches[0].clientX;
        if(parseInt(list.bigSwiper) > -86  && this.slideDelete){
          if(moveX < startX){
            list.bigSwiper = -(startX - moveX) + 'px'
            e.target.ontouchend= (e)=>{
              this.options.forEach(item =>{
                item.bigSwiper = '0px'
              })
              if(startX - moveX > 43){
                list.bigSwiper =  '-20%'
              }else{
                list.bigSwiper =  0
              }
            }
          }
          else if(parseInt(list.bigSwiper) >=0){
            list.bigSwiper =  '0px'
          }
          else{
            list.bigSwiper = -(startX - moveX) + 'px'
            e.target.ontouchend= (e)=>{
              list.bigSwiper =  '0px'
            }
          }
        }
      }
      e.target.ontouchend= (e)=>{
        list.bigSwiper =  '0px'
      }
    },
    swiperRight(list){
      list.bigSwiper =  '0px'
    },
      // 删除操作
    deleteFn(index){
      this.$emit('delete-item',index)
    },
    // 左侧点击事件
    leftClick(list){
      if(this.editor && !parseInt(list.bigSwiper)){
        this.$emit('editor',list)
      }
    },
    // 右侧点击事件
    rightClick(list){
      if(this.editor && !parseInt(list.bigSwiper)){
        this.$emit('editor',list)
      }
    },
  },
  created(){
  },
  mounted() {
    this.options.forEach(item =>{
      // 深度更新
      this.$set(item , 'bigSwiper', '0px')
    })
  },
  props: {
    options:{
      type:Array
    },
    left:{ //左侧编辑，删除选项
      type:String,
      default: 'none'
    },
    right:{
      type:String, //右侧选中，编辑选项
      default: 'none'
    },
    slideDelete:{ //左滑删除
      type:Boolean,
      default:true
    },
    editor:{
      type:Boolean,
      default:true
    },
    leftImgOptions:{
      type:Object,
      default(){
        return {
          img: require('./img/editor.png'),
          width: '20px',
          height: '20px'
        }
      }
    },
    rightImgOptions:{
      type:Object,
      default(){
        return {
          img: require('./img/editor.png'),
          width: '20px',
          height: '20px'
        }
      }
    }
  },
  destroyed(){
  }
}
</script>

<style lang='scss' scoped>
  .list{
    border-bottom:1px solid #f3f4f8;
    position: relative;
    overflow: hidden;
    .swiper{
      width: 120%;
      left:0;
      transition:left 0.4s cubic-bezier(0.44, 0.59, 0.39, 1.59);
      position: relative;
      display: flex;
      align-items: center;
      background: #d2a47e;
      .swipeLeft{
        width: 100%;
        background: #fff;
        padding: 10px 0;
        display: flex;
        .left-img{
          width: 15%;
          display: flex;
          align-items: center;
          justify-content: center;
          .type{
            width: 20px;
            height:20px;
          }
        }
        .ticket{
          .title{
            font-size: 16px;
            font-weight: bold;
          }
        }
        .no-left-img{
          margin-left:3%;
        }
        .checkbox-wrapper{
          width: 15%;
          display: flex;
          align-items: center;
          justify-content: center;
          .checkbox{
            width: 20px;
            height:20px;
          }
        }
      }
      .cancle{
        width:20%;
        color: #fff;
        height: 100%;
        text-align: center;
      }
    }
  }
</style>
