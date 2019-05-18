import zlLoadingComponent from '../components/zl-loading'; 
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
          console.log(typeof options)
          if( typeof options === 'string'){
            $vm.text = options;
          }else if (typeof options === 'object') {
            $vm.type = options.type || 'rotate-circle';
            $vm.text = options.text || '加载中­';
            $vm.textMove = options.textMove || 'wave';
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
      }
    })
  }
}

