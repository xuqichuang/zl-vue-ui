<template>
<div>
<div class="prevent" @touchmove="move" v-show="show">
  <div class='container'>
    <div class="circle" v-if="type == 'circle'">
      <div class="loading"></div>
      <div class="loading"></div>
    </div>
    <div class="accordion" v-if="type == 'accordion'">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="double-circle" v-if="type == 'double-circle'">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
    <div class="heart-wrapper" v-if="type == 'heart'">
      <div class="heart"></div>
      <div class="heart"></div>
      <div class="heart"></div>
    </div>
    <div class="rotate-circle" v-if="type == 'rotate-circle'">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
    <div class="scale-circle" v-if="type == 'scale-circle'">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
      <div class="bounce3"></div>
    </div>
    <div class="content" v-if="text && textMove == 'wave'">
      <span v-for="item in text" :key="item">{{item}}</span>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  methods: {
    move(ev){
      ev.stopPropagation();
      ev.preventDefault();
    },
  },
  props: {
    show: {
      type:Boolean,
      default: false
    },
    type:{
      type:String,
      default:'rotate-circle'
    },
    text:{
      type:String,
      default: '加载中­'
    },
    textMove:{
      type: String,
      default: 'wave'
    }
  }
}
</script>

<style lang='less' scoped>
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate2 {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
    border-top-color: rgba(0, 0, 255, 0.5);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
}
@keyframes rotate2 {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
    border-top-color: rgba(0, 0, 255, 0.5);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
}
* {
  box-sizing: border-box;
}

body {
  background: #f9f9f9;
  padding-bottom: 100px;
}

h1, h3 {
  display: block;
  margin: 0px auto;
  text-align: center;
  font-family: 'Tahoma';
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 1.5px;
}

h1 {
  margin: 50px auto;
}
.loader {
  position: fixed;
  width: 150px;
  height: 150px;
  display: block;
  overflow: hidden;
  z-index: 1000;
  top: 35%;
  left:35%;
  transform: translate(-50%, -50%);
}
.loader div {
  height: 100%;
}

/* loader 1 */
.loader1, .loader1 div {
  border-radius: 50%;
  padding: 8px;
  border: 2px solid transparent;
  -webkit-animation: rotate linear 3.5s infinite;
          animation: rotate linear 3.5s infinite;
  border-top-color: rgba(0, 0, 0, 0.5);
  border-bottom-color: rgba(0, 0, 255, 0.5);
}

/*loader 2  */
.loader2, .loader2 div {
  border-radius: 50%;
  padding: 8px;
  border: 2px solid transparent;
  -webkit-animation: rotate linear 3.5s infinite;
          animation: rotate linear 3.5s infinite;
  border-top-color: rgba(0, 0, 255, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
}

/*loader 3  */
.loader3, .loader3 div {
  border-radius: 50%;
  padding: 8px;
  border: 2px solid transparent;
  -webkit-animation: rotate linear 3.5s infinite;
          animation: rotate linear 3.5s infinite;
  border-top-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 255, 0.5);
  -webkit-animation-timing-function: cubic-bezier(0.55, 0.38, 0.21, 0.88);
          animation-timing-function: cubic-bezier(0.55, 0.38, 0.21, 0.88);
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
}

/* loader 4 */
.loader4, .loader4 div {
  border-radius: 50%;
  padding: 8px;
  border: 2px solid transparent;
  -webkit-animation: rotate linear 3.5s infinite;
          animation: rotate linear 3.5s infinite;
  border-radius: 50%;
  padding: 4px;
  -webkit-animation: rotate2 4s infinite linear;
          animation: rotate2 4s infinite linear;
}

div:hover {
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}

.loader, .loader * {
  will-change: transform;
}
@loading-color: #eee;
.prevent{
  position: fixed;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  right: 0;
  z-index: 100000;
}
.container{
  position: absolute;
  width: 15vh;
  height:15vh;
  left:50%;
  top:50%;
  border-radius: 3px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: @loading-color;
  .circle{
    // transition: all .3s ease;
    position: relative;
    margin:auto 0;
    width: 4vh;
    height: 4vh;
    .loading{
      width: 100%;
      height: 100%;
      border-top:2px solid @loading-color;
      border-left:2px solid @loading-color;
      border-radius: 100% 0 0;
      animation: circles 1s cubic-bezier(1, -0.57, 0.36, 1.46) infinite;
      position: absolute;
      left:-50%;
      top: -50%;
      transform: translate(-50%,-50%);
      transform-origin: 100% 100%;
    }
    // overflow: hidden;
    @-webkit-keyframes circles {
      0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100%{
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes circles {
      0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100%{
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    // animation: name duration timing-function delay iteration-count direction fill-mode;
  }
  .accordion {
    margin: 0 auto;
    width: 70px;
    height: 40px;
    text-align: center;
    font-size: 10px;
    div {
      background-color: @loading-color;
      height: 100%;
      width: 6px;
      display: inline-block;
      -webkit-animation: accordion 1s infinite ease-in-out;
      animation: accordion 1s infinite ease-in-out;
      &:nth-child(2n){
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      &:nth-child(3n){
        -webkit-animation-delay: -1.2s;
        animation-delay: -1.2s;
      }
      &:nth-child(4n){
        -webkit-animation-delay: -1.3s;
        animation-delay: -1.3s;
      }
      &:nth-child(5n){
        -webkit-animation-delay: -1.2s;
        animation-delay: -1.2s;
      }
      &:nth-child(6n){
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      &:nth-child(7n){
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }
    }
    @-webkit-keyframes accordion {
      0%,100% { 
        -webkit-transform: scaleY(0.1) 
      } 
      50% { 
        -webkit-transform: scaleY(1.0) 
      }
    }
    @keyframes accordion {
      0%,100% {
        transform: scaleY(0.1);
        -webkit-transform: scaleY(0.1);
      } 
      50% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
      }
    }
  }
  .double-circle {
    width: 60px;
    height: 60px;
    position: relative;
    margin: 0 auto;
    .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: @loading-color;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: bounce 2.0s infinite ease-in-out;
      animation: bounce 2.0s infinite ease-in-out;
    }
    .double-bounce2 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    @-webkit-keyframes bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
    }
    @keyframes bounce {
      0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 
      50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }
  }
  .heart-wrapper {
    width: 80%;
    height: 20px;
    margin: 0 auto;
    display: flex;
    .heart {
      width: 30%;
      height: 50%;
      border-radius: 50%;
      position: relative;
      -webkit-animation: heart 2s infinite ease-in-out;
      animation: heart 2s infinite ease-in-out;
      &:before,
      &:after {
        position: absolute;
        content: "";
        left: 50%;
        top: 0;
        width: 20%;
        height: 80%;
        background: rgba(255,255,255,1);
        border-radius: 50% 50% 0 0;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
      }
      &:after {
        left: 30%;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transform-origin: 100% 100%;
        transform-origin :100% 100%;
      }
    }
    @-webkit-keyframes heart {
      0%, 100% { -webkit-transform: scale(0.2) }
      50% { -webkit-transform: scale(1) }
    }
    @keyframes heart {
      0%, 100% {
        transform: scale(0.2);
        -webkit-transform: scale(0.2);
      } 
      50% {
        transform: scale(1);
        -webkit-transform: scale(1);
      }
    }
  }
  .rotate-circle {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    position: relative;
    text-align: center;
    -webkit-animation: rotate-circle 2.0s infinite linear;
    animation: rotate-circle 2.0s infinite linear;
    .dot1, .dot2 {
      width: 60%;
      height: 60%;
      display: inline-block;
      position: absolute;
      top: 0;
      background-color: @loading-color;
      border-radius: 100%;
      -webkit-animation: rotate-circle-bounce 2.0s infinite ease-in-out;
      animation: rotate-circle-bounce 2.0s infinite ease-in-out;
    }
    .dot2 {
      top: auto;
      bottom: 0px;
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    @-webkit-keyframes rotate-circle { 
      100% { -webkit-transform: rotate(360deg) }
    }
    @keyframes rotate-circle { 
      100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }
    }
    @-webkit-keyframes rotate-circle-bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
    }
    @keyframes rotate-circle-bounce {
      0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
      }
    }
  }
  .scale-circle {
    margin: 0 auto 0;
    width: 100%;
    text-align: center;
    div {
      width: 10px;
      height: 10px;
      background-color: @loading-color;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: scale-circle 1s infinite ease-in-out;
      animation: scale-circle 1s infinite ease-in-out;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-delay: -0s;
        animation-delay: -0s;
      &:nth-child(2n){
        -webkit-animation-delay: -.1s;
        animation-delay: -.1s;
      }
      &:nth-child(3n) {
        -webkit-animation-delay: -.2s;
        animation-delay: -.2s;
      }
      &:nth-child(4n) {
        -webkit-animation-delay: -.3s;
        animation-delay: -.3s;
      }
    }
     
    @-webkit-keyframes scale-circle {
      0%, 80%, 100% { -webkit-transform: scale(0.0) }
      40% { -webkit-transform: scale(1.0) }
    }
    @keyframes scale-circle {
      0%, 80%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 
      40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }
  }






  .content{
    padding-bottom: 10px;
    span{
      display: inline-block;
      animation: content-translate 1.3s ease infinite;
    }
    span:nth-child(2n){
      animation-delay: .1s;
    }
    span:nth-child(3n){
      animation-delay: .2s;
    }
    span:nth-child(4n){
      animation-delay: .3s;
    }
    span:nth-child(5n){
      animation-delay: .4s;
    }
    span:nth-child(6n){
      animation-delay: .5s;
    }
    span:nth-child(7n){
      animation-delay: .6s;
    }
    span:nth-child(8n){
      animation-delay: .7s;
    }
    span:nth-child(9n){
      animation-delay: .8s;
    }
    span:nth-child(10n){
      animation-delay: .9s;
    }
    @keyframes content-translate {
      0%{
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
      }
      100%{
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
      }
    }
  }
}
</style>
