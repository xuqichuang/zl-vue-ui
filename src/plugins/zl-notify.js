import zlNotifyComponent from '../components/zl-notify'; 
import { mergeOptions } from '../libs/plugin-helper'
let $vm;
let timer = null;
export default {
  install(Vue, options){
    if (!$vm) {
        const ZlNotifyPlugin = Vue.extend(zlNotifyComponent);
        $vm = new ZlNotifyPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);
    }
    $vm.show = false;
    let notify = {
        show(options = {}) {
          if( typeof options === 'string'){
            $vm.text = options;
          }else if (typeof options === 'object') {
            mergeOptions($vm, options)
          }
          $vm.show = true;
          timer && clearTimeout(timer)
          timer = setTimeout(()=>{
            $vm.show = false;
          },$vm.time)
        },
        hide() {
          timer && clearTimeout(timer)
          $vm.show = false;
        }
    };
    if (!Vue.$zhenlv) {
      Vue.$zhenlv = {
        notify
      }
    }else{
      Vue.$zhenlv.notify = notify;
    }
    Vue.mixin({
      created() {
        this.$zhenlv = Vue.$zhenlv;
      },
      deactivated() {
        this.$zhenlv.notify.hide()
      },
      destroyed() {
        this.$zhenlv.notify.hide()
      }
    })
  }
}


