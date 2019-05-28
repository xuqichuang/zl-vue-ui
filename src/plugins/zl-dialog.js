import zlDialogComponent from '../components/zl-dialog'; 
import { mergeOptions } from '../libs/plugin-helper'
let $vm;
export default {
  install(Vue, options){
    if (!$vm) {
        const ZlDialogPlugin = Vue.extend(zlDialogComponent);
        $vm = new ZlDialogPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);
    }
    $vm.show = false;
    let dialog = {
        show(options = {}) {
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
        dialog
      }
    }else{
      Vue.$zhenlv.dialog = dialog;
    }
    Vue.mixin({
      created() {
        this.$zhenlv = Vue.$zhenlv;
      },
      deactivated() {
        this.$zhenlv.dialog.hide()
      },
      destroyed() {
        this.$zhenlv.dialog.hide()
      }
    })
  }
}


