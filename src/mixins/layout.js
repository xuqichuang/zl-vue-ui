const parentMixin = {

}

const childMixin = {
  data(){
    return {
      padding: this.$parent.gutter,
      marginB: this.$parent.bottom
    }
  },
  created() {
    console.log(this.$parent.gutter)
  },
}

export {
  parentMixin,
  childMixin
}