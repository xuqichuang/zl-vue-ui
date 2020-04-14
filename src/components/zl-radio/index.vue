<template>
  <input
    type="radio"
    class="zl-theme-radio"
    :class="size"
    :disabled="disabled"
    :checked="checked"
    @change.stop="change"
  />
</template>
<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  methods: {
    change(e) {
      this.$emit("change", e.target.checked);
    }
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default" //small, large
    }
  }
};
</script>
<style lang="less" scoped>
input[type="radio"] {
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  background-color: transparent;
  border: 0;
  outline: 0 !important;
  color: #d8d8d8;
  position: relative;
  &.small {
    width: 15px;
    height: 15px;
  }
  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border: 1PX solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 20px;
    position: absolute;
  }
  &.small:before {
    width: 15px;
    height: 15px;
  }
  &:disabled:before {
    border: 1PX solid #bbb;
    background-color: #ddd;
  }
  &:checked:before {
    border: 1PX solid #d2a47e;
    background-color: #d2a47e;
  }
  &:checked:after {
    content: "";
    display: block;
    width: 7.5px;
    height: 15px;
    border-left: 1.5px solid #fff;
    border-top: 1.5px solid #fff;
    border-radius: 1.5px;
    box-sizing: border-box;
    position: absolute;
    transform: rotate(-135deg) translate(-70%, 25%);
  }
  &.small:checked:after {
    width: 5.625px;
    height: 11.25px;
  }
}
</style>
