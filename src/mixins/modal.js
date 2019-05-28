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
    },
    _hide(){
      this.$emit('update:show', false)
      this.$emit('change', false)
      this.$emit('on-hide')
    },
  },
  
  computed:{
    maskStyle () {
      let zIndex = 1000;
      if (typeof this.maskZIndex !== 'undefined') {
        zIndex = this.maskZIndex
      }
      return {
        zIndex
      }
    },
    mask(){
      let zIndex = 1001;
      if (typeof this.maskZIndex !== 'undefined') {
        zIndex = this.maskZIndex + 1
      }
      return {
        zIndex
      }
    }
  }
}