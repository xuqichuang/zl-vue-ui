<template>
  <div class='row' :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
import {parentMixin} from '../../mixins/layout'
export default {
  components: {

  },
  props: {
    justify:{
      type: String,
      default: 'start' // end, space-between, space-around, center
    },
    gutter: [String, Number],
    align:{
      type: String,
      default: 'top'
    },
    bottom: [String, Number]
  },
  mixins:[parentMixin],
  computed: {
    rowStyle(){
      return {
        justifyContent: this.justify,
        alignItems: this.align
      }
    }
  },
  data() {
    return{

    }
  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
.row{
  display: flex;
  padding: 0 16px;
  flex-wrap: wrap;
  // justify-content: flex-start;
}
</style>
