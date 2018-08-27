<template>
  <div class="check">
    <input type="checkbox" class="input_check" :checked="checked">
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  props:{
    checked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="scss">
.check {
  display: inline-block;
  input[type=checkbox] {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    -webkit-appearance: none;
    background-color: transparent;
    border: 0;
    outline: 0 !important;
    color: #d8d8d8;
  } 
  input[type=checkbox]:after{
    content: "";
    display:block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 14px;
    font-size: 16px;
    color: #fff;
    border: 1px solid #ddd;
    background-color: #fff;
    box-sizing:border-box;  
    border-radius: 3px;
  }
  input[type=checkbox]:checked:after{
    width: 20px;
    height: 20px;
    border: 0 solid #ddd;
    background: url('./img/plane_03.png') no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  
}

</style>
