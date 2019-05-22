export default {
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskZIndex: {
      type:[String, Number],
      default: 1000
    }
  },
  methods:{
    hide(){
      this.$emit('update:show', false)
      this.$emit('change', false)
    }
  }
}