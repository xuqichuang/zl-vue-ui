<template>
<div>
  <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <div class="modal animated" v-show="show" @touchmove.stop.prevent="" @click.stop="hide" :style="maskStyle"></div>
  </transition>
  <div class="container" v-show="show">
    <div class="wrapper">
      <slot></slot>
    </div>
    <div class="close" @click.stop="hide"></div>
  </div>
</div>
</template>

<script>
import modal from '../../mixins/modal.js'
export default {
  mixins: [modal],
  computed:{
    maskStyle () {
      if (typeof this.maskZIndex !== 'undefined') {
        return {
          zIndex: this.maskZIndex
        }
      }
    },
    mask(){
      if (typeof this.maskZIndex !== 'undefined') {
        return {
          zIndex: this.maskZIndex + 1
        }
      }
    }
  },
}
</script>

<style lang='less' scoped>
@import '../../styles/zl-modal.css';
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 305px;
  min-height: 350px;
  max-height: 450px;
  transform: translate(-50%,-50%);
  .wrapper{
    border-radius: 8px;
    width: 100%;
    min-height: 300px;
    max-height: 400px;
    background: #fff;
    overflow: auto;
    .p-title{
        background: #F7F7F7;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 15px;
    }
    .content{
        padding: 24px 0;
        color: #666;
        font-size: 14px;
        line-height: 22px;
    }
    .p-content{
        padding: 0 8px;
    }
  }
  .close{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border:1px solid #eee;
    transform: translate(-50%,50%);
    left:50%;
    position: absolute;
    bottom: 25px;
    &:before{
      content:'';
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      height: 15px;
      width: 1px;
      background: #eee;
      transform: translate(-50%,-50%) rotate(45deg);
    }
    &:after{
      content:'';
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      height: 15px;
      width: 1px;
      background: #eee;
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }
}
</style>
