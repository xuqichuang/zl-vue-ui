<template>
<span @click.stop="change">
  <input class="zl-theme-checkbox"
    type="checkbox" 
    :disabled="disabled" 
    :checked="checked"/>
</span>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  data(){
    return {
      flag: false,
      first: 0,
      second: 0
    }
  },
  methods:{
    change(e){
      this.flag = !this.flag;
      if(this.flag){
        this.first = e.timeStamp
      }else{
        this.second = e.timeStamp
      }
      // 过滤双击复选框失效情况
      if(this.len && this.len>= this.max){
        this.$emit('change', false)
        if(e.target.checked){
          e.preventDefault();
        }
      }else{
        this.$emit('change', e.target.checked)
      }
    }
  },
  props:{
    checked:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    len:{ // 当前选中长度
      type: [Number, String]
    },
    max:{ // 允许选择最大长度
      type: [Number, String]
    }
  }
}
</script>
<style lang="less" scoped>
span{
  line-height: 0;
}
input[type=checkbox] {
  width: 16px;
  height: 16px;
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
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-sizing:border-box;  
  border-radius: 2px;
  position: absolute;
}

input[type=checkbox]:disabled:before{
  content: "";
  display:block;
  width: 16px;
  height: 16px;
  border: 1px solid #bbb;
  background-color: #ddd;
  box-sizing:border-box;  
  border-radius: 2px;
  position: absolute;
}
input[type=checkbox]:checked:before{
  content: "";
  display:block;
  width: 16px;
  height: 16px;
  border: 1px solid #D2A47E;
  background-color: #D2A47E;
  box-sizing:border-box;  
  border-radius: 2px;
  position: absolute;
}
input[type=checkbox]:checked:after{
  content: "";
  display:block;
  width: 7.5px;
  height: 15px;
  border-left: 1.5px solid #fff;
  border-top: 1.5px solid #fff;
  border-radius:  1.5px;
  box-sizing:border-box; 
  position: absolute;
  transform: rotate(-135deg) translate(-70%, 25%);
}
</style>
