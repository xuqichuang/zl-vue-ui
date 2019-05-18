<template>
<transition enter-active-class="zoomIn" leave-active-class="zoomOut">
<div class="model animated" v-show="show" @touchmove="move">
  <div class="toast">
    <span>{{text}}</span>
  </div>
</div>
</transition>
</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    time:{
      type: Number,
      default: 2000
    },
    text: String
  },
  methods: {
    move(ev){
      ev.stopPropagation();
      ev.preventDefault();
    },
  },
  watch:{
    show(val){
      if(val){
        console.log(val)
        this.$emit('change', true)
        clearTimeout(this.timeout)
        this.timeout = setTimeout( () =>{
          this.$emit('change', false)
        }, this.time)
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/animate.min.css';
.model{
  position:fixed;
  left:0;
  top: 0;
  width:100%;
  height:100%;
  z-index: 3000;
}
.toast{
  top: 50%;
  left:50%;
  position:fixed;
  transform: translate(-50%, -50%);
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.65);
}
</style>
