<template>
  <div class="myswipper">
    <div class="switch-text" v-if="options">
      <span v-if="checked">{{options.show}}</span>
      <span v-else>{{options.hide}}</span>
    </div>
    <input class="zl-theme-switch"
      type="checkbox" 
      :checked="checked"
      :disabled="disabled"
      @change.stop="changeSwitch" />
  </div>
</template>
<script>
export default {
  model:{
    prop: 'checked',
    event: 'change'
  },
  methods: {
    changeSwitch(e){
      this.$emit('change',e.target.checked)
    }
  },
  props: {
    checked:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    options:{
      type:Object
    }
  },
}
</script>
<style lang='less' scoped>
.myswipper{
  display: flex;
  align-items: center;
  input[type=checkbox] {
    width: 52px;
    height: 32px;
    -webkit-appearance: none;
    background-color: transparent;
    border: 0;
    outline: 0 !important;
    color: #d8d8d8;
    position: relative;
  } 
  input[type=checkbox]:before{
    content: "";
    display:block;
    width: 52px;
    height: 32px;
    border: 1Px solid #ddd;
    background-color: #fff;
    box-sizing:border-box;  
    border-radius: 32px;
    position: absolute;
  }
  input[type=checkbox]:after{
    content: "";
    display:block;
    width: 30px;
    height: 30px;
    left:1px;
    top:1px;
    border: 1Px solid #fff;
    background-color: #fff;
    box-sizing:border-box;  
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    border-radius: 50%;
    position: absolute;
  }
  input[type=checkbox]:disabled:before{
    content: "";
    display:block;
    width: 52px;
    height: 32px;
    border: 1Px solid #999;
    background-color: #999;
    box-sizing:border-box;  
    border-radius: 32px;
    position: absolute;
  }
  input[type=checkbox]:disabled:after{
    content: "";
    display:block;
    width: 30px;
    height: 30px;
    left:1px;
    top:1px;
    border: 1Px solid #fff;
    background-color: #fff;
    box-sizing:border-box;  
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    border-radius: 50%;
    position: absolute;
  }
  input[type=checkbox]:checked:before{
    content: "";
    display:block;
    width: 52px;
    height: 32px;
    border: 1Px solid #D2A47E;
    background-color: #D2A47E;
    box-sizing:border-box;  
    border-radius: 32px;
    position: absolute;
  }
  input[type=checkbox]:checked:after{
    content: "";
    display:block;
    width: 30px;
    height: 30px;
    left:100%;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    border: 1Px solid #fff;
    background-color: #fff;
    box-sizing:border-box;  
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    border-radius: 50%;
    position: absolute;
  }
  .switch-text{
    margin-right: 5px;
  }
}
</style>