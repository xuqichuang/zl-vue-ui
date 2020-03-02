<template>
<div>
  <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    <div class="modal animated" v-show="show" :style="maskStyle"></div>
  </transition>
  <div class='container' v-show="show" :style="maskLoad">
    <vue-lottie :options="defaultOptions" :width="50" :height="20"></vue-lottie>
    <div class="content" v-if="text">
      <span>{{text}}</span>
    </div>
  </div>
</div>
</template>

<script>
import modal from '../../mixins/modal.js'
import vueLottie from 'vue-lottie'
import * as animationData from '../../datas/loading.json'
export default {
  mixins: [modal],
  components:{
    vueLottie
  },
  computed:{
    maskLoad(){
      return {
        background:this.background,
        zIndex:this.mask
      }
    }
  },
  props: {
    type:{
      type:String,
      default:'rhombus'
    },
    text:{
      type:String,
      default: '正在加载'
    },
    background:{
      type: String,
      default: ''
    }
  },
  data(){
    return {
      defaultOptions:{animationData: animationData}
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/zl-modal.less';

div:hover {
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}

@loading-color: #eee;
.container{
  position: fixed;
  width: 100px;
  height:120px;
  left:50%;
  top:50%;
  border-radius: 3px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: @loading-color;
  .content{
    width: 100%;
    text-align: center;
    span{
      color: #B2B2B2;
    }
  }
}
</style>
