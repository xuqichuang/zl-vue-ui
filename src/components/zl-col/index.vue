<template>
<div :style="colStyle" class="zl-col">
  <slot></slot>
</div>
</template>

<script>
import { childMixin } from '../../mixins/layout'
export default {
  props: {
    span: [String, Number],
    offset: [String, Number]
  },
  mixins:[childMixin],
  computed: {
    colStyle(){
      return {
        width: (this.percent * this.span) + '%',
        paddingLeft: this.padding / 2 + 'px',
        paddingRight: this.padding / 2 + 'px',
        marginBottom: this.marginB + 'px',
        marginLeft: (this.percent * this.offset) + '%'
      }
    }
  },
  data() {
    return{
      percent: 100/24
    }
  },
  watch: {

  },
  methods: {

  },
  mounted() {
    
  },
  destroyed() {

  },
}
</script>

<style lang='less' scoped>
  .zl-col{
    display: flex;
    box-sizing: border-box;
    background-clip: content-box;
  }
</style>
