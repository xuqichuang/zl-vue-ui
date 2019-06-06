<template>
  <div class="zl-circle">
    <svg viewBox="0 0 100 100">
      <defs v-if="isGradient">
        <linearGradient :id='id' x1="10%" y1="45%" x2="50%" y2="0%">
          <stop offset="0%" :style="{'stop-color': strokeColor[0], 'stop-opacity': 1}"/>
          <stop offset="100%" :style="{'stop-color': strokeColor[1], 'stop-opacity': 1}"/>
        </linearGradient>
      </defs>
      <path :d="pathString"
        :stroke="trailColor"
        :stroke-width="trailWidth"
        fill-opacity="0"/>
      <path :d="pathString"
        :stroke-linecap="strokeLinecap"
        :stroke="isGradient ? url : strokeColor"
        :stroke-width="strokeWidth"
        fill-opacity="0" 
        :style="pathStyle"/>
    </svg>
    <div class="zl-circle-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zl-circle',
  props: {
    strokeWidth: {
      type: Number,
      default: 5
    },
    strokeColor: {
      type: [Array, String],
      default: '#3FC7FA'
    },
    trailWidth: {
      type: Number,
      default: 5
    },
    trailColor: {
      type: String,
      default: '#D9D9D9'
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    anticlockwise: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'zl-circle-gradient'
    }
  },
  computed: {
    url () {
      return 'url(#' + this.id + ')'
    },
    radius () {
      return 50 - this.strokeWidth / 2
    },
    pathString () {
      return `M 50,50 m 0,-${this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`
    },
    len () {
      return Math.PI * 2 * this.radius
    },
    pathStyle () {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((this.anticlockwise ? this.percent - 100 : 100 - this.percent) / 100 * this.len)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      }
    },
    isGradient () {
      return typeof this.strokeColor !== 'string'
    }
  }
}
</script>

<style>
.zl-circle {
  position: relative;
  width: 100%;
  height: 100%;
}
.zl-circle-content {
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>