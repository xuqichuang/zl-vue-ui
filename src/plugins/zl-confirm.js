import zlConfirmComponent from '../components/zl-confirm'; 
import { mergeOptions } from '../libs/plugin-helper'
let $vm;
export default {
  install(Vue, options = {}){
    if (!$vm) {
        const ZlConfirmPlugin = Vue.extend(zlConfirmComponent);
        $vm = new ZlConfirmPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);
    }
    $vm.show = false;
    let confirm = {
      
      show(options) {
        console.log(options, $vm)
        if (typeof options === 'object') {
          mergeOptions($vm, options)
          options.show && options.show()
        }
        $vm.$off('on-cancel')
        $vm.$off('on-confirm')
        $vm.$on('on-cancel', () => {
          $vm.show = false;
          options && options.onCancel && $vm.onCancel()
        })
        $vm.$on('on-confirm', () => {
          $vm.show = false;
          options && options.onConfirm && $vm.onConfirm()
        })
        $vm.show = true;
      },
      hide() {
          $vm.show = false;
      }
    };
    if (!Vue.$zhenlv) {
      Vue.$zhenlv = {
        confirm
      }
    }else{
      Vue.$zhenlv.confirm = confirm;
    }
    Vue.mixin({
      created() {
        this.$zhenlv = Vue.$zhenlv;
      },
      // 下面页面进入时会自动关闭不显示，所以弃用掉
      // deactivated() {
      //   this.$zhenlv.confirm.hide()
      // },
      // destroyed() {
      //   this.$zhenlv.confirm.hide()
      // }
    })
  }
}


