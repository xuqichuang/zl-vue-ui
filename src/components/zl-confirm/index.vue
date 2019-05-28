<template>
<div>
  <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <div class="modal animated" v-show="show" @touchmove.prevent="" :style="maskLoad"></div>
  </transition>
  <div class="container" v-show="show" :style="mask" @touchmove.prevent="">
    <div class="wrapper">
      <div class="confirm-content">
        <div class="title" v-if="!!title">{{ title }}</div>
        <slot><div class="content" v-if="!!content" v-html="content"></div></slot>
      </div>
    </div>
    <div class="confirm-bottom zl-1px-t">
      <div class="left zl-1px-r" @click.stop="_cancel">{{ leftText }}</div>
      <div class="right zl-theme-color" @click.stop="_confirm">{{ rightText }}</div>
    </div>
  </div>
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
    _cancel(){
      this.$emit('update:show', false)
      this.$emit('change', false)
      this.$emit('on-cancel')
    },
    _confirm(){
      this.$emit('update:show', false)
      this.$emit('change', false)
      this.$emit('on-confirm')
    },
  },
  props:{
    title:{
      type: String
    },
    content:{
      type: String
    },
    leftText:{
      type: String,
      default: '取消'
    },
    rightText:{
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
@import '../../styles/zl-modal.css';
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
  .wrapper{
    padding:10px 20px;
    .confirm-content{
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
  .confirm-bottom{
    height: 50px;
    display: flex;
    .left, .right{
      height: 100%;
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
  }
}
</style>
