<template>
<div>
  <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <div class="modal animated" v-show="show" @touchmove.prevent="" @click.stop="_hide" :style="maskLoad"></div>
  </transition>
  <transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
    <div class="sheet-container animated" :style="sheetStyle" v-show="show">
      <div class="sheet sheet-item" v-for="(item, index) in options" :key="index" @click="itemClick(item, index)" :class="{'disabled': item[disabled]}">
        <span>{{item[name]}}</span>
        <span>{{item[desc]}}</span>
      </div>
      <div v-if="cancelText" class="sheet sheet-cancel" @click="cancel">{{cancelText}}</div>
    </div>
  </transition>
</div>
</template>

<script>
import modal from '../../mixins/modal.js'
export default {
  mixins: [modal],
  components: {

  },
  props: {
    background:{
      type: String,
      default: 'rgba(0,0,0,.6)'
    },
    options:{
      type: Array,
      required: true
    },
    name:{
      type: String,
      default: 'name'
    },
    desc:{
      type: String,
      default: 'desc'
    },
    cancelText: String,
    disabled:{
      type: String,
      default: 'disabled'
    },
    itemClickHide:{
      type: Boolean,
      default: true
    }
  },
  computed: {
    maskLoad(){
      return {
        background:this.background,
        ...this.maskStyle
      }
    },
    sheetStyle(){
      return {
        ...this.mask
      }
    }
  },
  data() {
    return{

    }
  },
  watch: {

  },
  methods: {
    cancel(){
      this._hide()
      this.$emit('on-cancel')
    },
    itemClick(item, index){
      if(item[this.disabled]){
        return;
      }
      if(this.itemClickHide){
        this._hide()
      }
      this.$emit('on-select', item, index)
    }
  },
  mounted() {

  },
  destroyed() {

  },
}
</script>

<style lang='less' scoped>
@import '../../styles/zl-modal.less';
@import '../../styles/index.less';
@import '../../assets/less/1px.less';
.sheet-container{
  position: fixed;
  bottom:0;
  display: block;
  width: 100%;
  background: #f5f5f5;
  .animate-t(.3s);
  .sheet{
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 16px 0;
    &.sheet-item{
      &:not(:last-child):after{
        .setBottomLine();
      }
    }
    &.sheet-cancel{
      margin-top: 10px;
    }
    &.disabled{
      color: #ccc;
    }
  }
}
</style>
