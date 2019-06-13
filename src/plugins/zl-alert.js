import zlAlertComponent from '../components/zl-alert'; 
import { mergeOptions } from '../libs/plugin-helper'
let $vm;
export default {
  install(Vue, options = {}){
    if (!$vm) {
        const ZlAlertPlugin = Vue.extend(zlAlertComponent);
        $vm = new ZlAlertPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);
    }
    $vm.show = false;
    let alert = {
      
      show(options) {
        console.log(options, $vm)
        if (typeof options === 'object') {
          mergeOptions($vm, options)
          options.show && options.show()
        }
        $vm.$off('on-hide')
        $vm.$on('on-hide', () => {
          $vm.show = false;
          options && options.onHide && $vm.onHide()
        })
        $vm.show = true;
      },
      hide() {
          $vm.show = false;
      }
    };
    if (!Vue.$zhenlv) {
      Vue.$zhenlv = {
        alert
      }
    }else{
      Vue.$zhenlv.alert = alert;
    }
    Vue.mixin({
      created() {
        this.$zhenlv = Vue.$zhenlv;
      },
      // 下面页面进入时会自动关闭不显示，所以弃用掉
      // deactivated() {
      //   this.$zhenlv.alert.hide()
      // },
      // destroyed() {
      //   this.$zhenlv.alert.hide()
      // }
    })
  }
}


