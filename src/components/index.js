
import zlCalendar from './zl-calendar'
import zlRange from './zl-range'
const comment = {
  install:function(Vue){
    Vue.component('zlCalendar', zlCalendar)
    Vue.component('zlRange', zlRange)
  }
}
{/* <zhenlv-calendar ref="zlCalendar"/> */}
// global 的状态下自动安装
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(comment)
}
// 导出模块
export default comment