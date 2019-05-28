<template>
<div>
  <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <div class="modal animated" v-show="show" @touchmove.stop.prevent="" :style="maskLoad"></div>
  </transition>
  <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
    <div class="container animated" v-show="show" :style="mask">
      <div class="wrapper">
        <slot></slot>
      </div>
      <div class="zl_close" @click.stop="_hide"></div>
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
        ...this.maskStyle
      }
    }
  },
  methods:{
    _hide(){
      this.$emit('update:show', false)
      this.$emit('change', false)
      this.$emit('on-hide')
    },
  },
  props:{
    background:{
      type: String,
      default: 'rgba(0,0,0,.6)'
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/zl-modal.less';
@import '../../styles/close.less';
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 305px;
  min-height: 350px;
  max-height: 450px;
  transform: translate(-50%,-50%);
  .transform-origin;
  .animate-t;
  .wrapper{
    border-radius: 4px;
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
}
</style>
