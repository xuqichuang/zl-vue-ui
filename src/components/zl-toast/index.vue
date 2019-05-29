<template>
<div>
  <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <div class="modal animated" v-show="show" :style="maskStyle"></div>
  </transition>
  <div class="toast" v-show="show">
    <vue-lottie :options="defaultOptions" :width="50" :height="30" v-if="type == 'three-rhombus'" v-on:animCreated="handleAnimation"></vue-lottie>
    <span class="text">{{text}}</span>
  </div>
</div>
</template>

<script>
import modal from '../../mixins/modal.js'
import vueLottie from 'vue-lottie'
import * as animationData from '../../datas/toast.json'
export default {
  mixins: [modal],
  components: {
    vueLottie
  },
  props: {
    type:{
      type: String,
      default: 'three-rhombus'
    },
    time:{
      type: Number,
      default: 2000
    },
    text: String,
  },
  data(){
    return {
      defaultOptions:{animationData: animationData}
    }
  },
  methods:{
    handleAnimation: function (anim) {
      this.anim = anim;
    },
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
@import '../../styles/zl-modal.less';
.toast{
  top: 50%;
  left:50%;
  position:fixed;
  transform: translate(-50%, -50%);
  transform-origin: 0% 0%;
  color: #fff;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.65);
  z-index: 2000;
  text-align: center;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .toast-img{
    width: 60px;
    img{
      width: 100%;
    }
  }
  .text{
    font-size: 14px;
  }
}
</style>
