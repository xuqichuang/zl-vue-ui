import zlLoadingComponent from './zl-loading'; 
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
        show(type, content) {
            $vm.show = true;
            $vm.type = type;
            $vm.content = content;
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


