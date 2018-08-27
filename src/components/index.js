import VueComponent from './VueComponent.vue'
const comment = {
  install:function(Vue){
    Vue.component(VueComponent.name, VueComponent)
  }
}

// global 的状态下自动安装
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(comment)
}
// 导出模块
export default comment;