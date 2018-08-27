import vCheckbox from './vCheckbox/'
const comment = {
  install:function(Vue){
    Vue.component('vCheckbox', vCheckbox)
  }
}

// global 的状态下自动安装
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(comment)
}
// 导出模块
export default comment