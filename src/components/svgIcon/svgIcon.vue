<template>
  <svg :class="svgClass" aria-hidden="true" @click="click">
    <use :xlink:href="iconName" />
  </svg>
</template>
 
<script>
/**
 * 使用栗子
 *   <svg-icon icon-class="set"></svg-icon>
 */
  export default {
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      }
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      },
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      }
    },
    methods:{
      click(){
        this.$emit('click')
      }
    }
  }
</script>
 
<style scoped>
  .svg-icon {
    width: 26px;
    height: 26px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>