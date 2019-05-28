import zlToastComponent from '../components/zl-toast'; 
import { mergeOptions } from '../libs/plugin-helper'
let $vm;
let timer = null;
export default {
  install(Vue, options){
    if (!$vm) {
        const ZlToastPlugin = Vue.extend(zlToastComponent);
        $vm = new ZlToastPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);
    }
    $vm.show = false;
    let toast = {
        show(options = {}) {
          if( typeof options === 'string'){
            $vm.text = options;
            $vm.time = 2000;
            $vm.type = 'three-rhombus';
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
        toast
      }
    }else{
      Vue.$zhenlv.toast = toast;
    }
    Vue.mixin({
      created() {
        this.$zhenlv = Vue.$zhenlv;
      },
      deactivated() {
        this.$zhenlv.toast.hide()
      },
      destroyed() {
        this.$zhenlv.toast.hide()
      }
    })
  }
}


