
import zlCalendar from './zl-calendar'
import zlRange from './zl-range'
import zlSlideDelete from './zl-slide-delete'
const comment = {
  install:function(Vue){
    Vue.component('zlCalendar', zlCalendar)
    Vue.component('zlRange', zlRange)
    Vue.component('zlSlideDelete', zlSlideDelete)
  }
}
// global 的状态下自动安装
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(comment)
}
// 导出模块
export default comment