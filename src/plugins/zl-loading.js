import zlLoadingComponent from '../components/zl-loading'; 
import { mergeOptions } from '../libs/plugin-helper'
let $vm;
export default {
  install(Vue, options){
    if (!$vm) {
        const ZlLoadingPlugin = Vue.extend(zlLoadingComponent);
        $vm = new ZlLoadingPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);
    }
    $vm.show = false;
    let loading = {
        show(options = {}) {
          if( typeof options === 'string'){
            $vm.text = options;
            $vm.background = '';
          }else if (typeof options === 'object') {
            mergeOptions($vm, options)
          }
          $vm.show = true;
        },
        hide() {
          $vm.show = false;
        }
    };
    if (!Vue.$zhenlv) {
      Vue.$zhenlv = {
        loading
      }
    }else{
      Vue.$zhenlv.loading = loading;
    }
    Vue.mixin({
      created() {
        this.$zhenlv = Vue.$zhenlv;
      },
      deactivated() {
        this.$zhenlv.loading.hide()
      },
      destroyed() {
        this.$zhenlv.loading.hide()
      }
    })
  }
}


