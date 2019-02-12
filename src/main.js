import Vue from 'vue'
import App from './App.vue'
import zlVueUi from 'zl-vue-ui'
Vue.use(zlVueUi)

new Vue({
  el: '#app',
  render: h => h(App)
})
