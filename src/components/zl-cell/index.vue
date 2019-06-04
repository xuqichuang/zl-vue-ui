<template>
<div>
  <div class="cell" @click="cellClick" :style="cellStyle">
    <div class="left">
      <div class="cell-top">
        <slot name="title-left"></slot>
        <span class="title">{{title}}</span>
        <em class="ftitle">{{ftitle}}</em>
        <slot name="title-right"></slot>
      </div>
      <div class="cell-desc">{{label}}
        <slot name="label"></slot>
      </div>
    </div>
    <div class="right">
      <slot name="text-left"></slot>
      <span class="value" v-if="valueType == 'text'">{{value}}</span>
      <input type="text" v-if="valueType == 'input'" :value="value" :placeholder="placeholder" @input="input">
      <slot name="text-right"></slot>
      <i class="iconfont" v-if="isLink" :class="{
        'iconxiangqinggengduox': arrow == 'right',
        'iconxiajiantou': arrow == 'down',
        'iconico_back': arrow == 'up'
      }"></i>
    </div>
  </div>
</div>
</template>

<script>
import ZlCheckbox from '../zl-checkbox'
export default {
  components:{
    ZlCheckbox
  },
  model:{
    prop: 'value',
    event: 'input'
  },
  props: {
    title: String,
    ftitle: String,
    value: String,
    label: String,
    arrow: {
      type: String,
      default:'right'
    },
    isLink: {
      type: Boolean,
      default: false
    },
    valueType:{
      type: String,
      default: 'text'
    },
    center:{
      type: Boolean,
      default: true
    },
    placeholder: String
  },
  data() {
    return{

    }
  },
  watch: {
    value (val) {
      this.tempValue = val
    },
  },
  computed:{
    cellStyle(){
      return {
        alignItems: this.center ? 'center' : ''
      }
    }
  },
  methods: {
    cellClick(){
      this.$emit('click')
    },
    input(el){
      this.$emit('input', el.target.value)
    }
  },
}
</script>

<style lang='less' scoped>
@import '../../assets/font/iconfont.css';
@import '../../assets/less/1px.less';
.cell{
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 16px;
  position: relative;
  &:after{
    .setBottomLine();
  }
  .left{
    .title{
      font-size: 14px;
      font-weight: bold;
    }
    .ftitle{
      color: #999;
    }
    .cell-desc{
      color: #999;
    }
  }
  .right{
    i{
      font-size: 12px;
      color: #999;
    }
    .value{
      color: #999;
    }
    input{
      width: 100%;
      height: 100%;
      display: block;
      font-size: 14px;
      text-align: right;
    }
  }
}
</style>
