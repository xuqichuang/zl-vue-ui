<template>
<div>
  <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <div class="modal animated" v-show="show" @touchmove.prevent="" :style="maskLoad"></div>
  </transition>
  <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
    <div class="container animated" v-show="show" :style="mask" @touchmove.prevent="">
      <div class="wrapper">
        <div class="alert-content">
          <div class="title" v-if="!!title">{{ title }}</div>
          <slot><div class="content" v-if="!!content" v-html="content"></div></slot>
        </div>
      </div>
      <div class="alert-bottom zl-1px-t">
        <div class="btn zl-theme-color" @click.stop="_hide">{{ btnText }}</div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import modal from '../../mixins/modal.js'
export default {
  mixins: [modal],
  computed: {
    maskLoad(){
      return {
        background:this.background,
        zIndex:this.maskStyle
      }
    }
  },
  props:{
    title:{
      type: String
    },
    content:{
      type: String
    },
    btnText:{
      type: String,
      default: '确定'
    },
    background:{
      type: String,
      default: 'rgba(0,0,0,.6)'
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/zl-modal.less';
@import '../../assets/less/1px.less';
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 305px;
  transform: translate(-50%,-50%);
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  .transform-origin;
  .animate-t;
  .wrapper{
    padding:10px 20px;
    .alert-content{
      .title{
        font-size: 18px;
        padding: 5px 0;
        text-align: center;
      }
      .content{
        font-size: 14px;
        padding: 5px 0;
      }
    }
  }
  .alert-bottom{
    height: 50px;
    .btn{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #D2A47E;
    }
  }
}
</style>
