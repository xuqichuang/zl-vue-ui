<template>
  <div class="zl-divider">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='less' scoped>
  .zl-divider{
    padding: 10px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    &:before, &:after{
      content:'';
      position: relative;
      height:1px;
      background: #C7C7C7;
      width: 80px;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
    }
    &:before{
      margin-right: 10px;
    } 
    &:after{
      margin-left: 10px;
    }
  }
</style>
