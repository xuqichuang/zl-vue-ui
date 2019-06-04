<template>
  <div class='cell-container'>
    <div class="group-title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    title: String,
    
  },
  computed: {

  },
  data() {
    return{

    }
  }
}
</script>

<style lang='less' scoped>
@import '../../assets/font/iconfont.css';
@import '../../assets/less/1px.less';
.cell-container{
  margin-top: 10px;
  .group-title{
    padding: 10px 16px;
    font-size: 14px;
  }
  
}
</style>
