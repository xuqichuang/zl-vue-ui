<template>
<div>
  <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
    <div class="notify animated" v-show="show" :style="computedStyle">
      <span class="text">{{text}}</span>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  props: {
    time:{
      type: Number,
      default: 2000
    },
    text: String,
    color:{
      type: String,
      default: '#fff'
    },
    background:{
      type: String,
      default: '#f44'
    },
    show:{
      type: Boolean,
      default: false
    },
    enterClass:{
      type: String,
      default: 'bounceInDown'
    },
    leaveClass:{
      type: String,
      default: 'slideOutUp'
    },
    height:{
      type: [String, Number],
      default: 40
    }
  },
  model:{
    prop: 'show',
    event: 'change'
  },
  computed:{
    computedStyle(){
      return {
        color: this.color,
        background: this.background,
        height: this.height + 'px'
      }
    }
  },
  watch:{
    show(val){
      if(val){
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
.notify{
  top: 0;
  left:0;
  width: 100%;
  right: 0;
  position:fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .text{
    font-size: 14px;
  }
}
</style>
