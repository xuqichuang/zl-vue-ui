<template>
  <input type="radio" 
    class="zl-theme-checkbox" 
    :disabled="disabled" 
    :checked="checked"
    @change="change"/>
</template>
<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  methods:{
    change(e){
      this.$emit('change', e.target.checked)
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
    }
  }
}
</script>
<style lang="scss" scoped>
input[type=radio] {
  width: .4rem;
  height: .4rem;
  -webkit-appearance: none;
  background-color: transparent;
  border: 0;
  outline: 0 !important;
  color: #d8d8d8;
  position: relative;
} 
input[type=radio]:before{
  content: "";
  display:block;
  width: .4rem;
  height: .4rem;
  border: 1px solid #ddd;
  background-color: #fff;
  box-sizing:border-box;  
  border-radius: .4rem;
  position: absolute;
}

input[type=radio]:disabled:before{
  content: "";
  display:block;
  width: .4rem;
  height: .4rem;
  border: 1px solid #bbb;
  background-color: #ddd;
  box-sizing:border-box;  
  border-radius: .4rem;
  position: absolute;
}
input[type=radio]:checked:before{
  content: "";
  display:block;
  width: .4rem;
  height: .4rem;
  border: 1px solid #D2A47E;
  background-color: #D2A47E;
  box-sizing:border-box;  
  border-radius: .4rem;
  position: absolute;
}
input[type=radio]:checked:after{
  content: "";
  display:block;
  width: .15rem;
  height: .3rem;
  border-left: .03rem solid #fff;
  border-top: .03rem solid #fff;
  border-radius:  .03rem;
  box-sizing:border-box; 
  position: absolute;
  transform: rotate(-135deg) translate(-70%, 25%);
}
</style>
