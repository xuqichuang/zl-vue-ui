import zlDialogComponent from '../components/zl-dialog'; 
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
        dialog
      }
    }else{
      Vue.$zhenlv.dialog = dialog;
    }
    Vue.mixin({
      created() {
        this.$zhenlv = Vue.$zhenlv;
      }
    })
  }
}


