<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template lang="pug">
transition(name="fade")
  .loader-component(v-show="show")
    svg.loader-component-svg(viewBox="25 25 50 50")
      circle(cx="50" cy="50" r="20")
</template>

<style lang="stylus" scoped>
@keyframes dash
  0%
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  50%
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  100%
    stroke-dashoffset: -125px;
@keyframes rotate
  100%
    transform: rotate(360deg);
.loader-component
  display flex
  justify-content center
  align-items center
  position fixed
  width 100%
  height 100%
  top 0
  left 0
  background-color rgba(0,0,0,0.3)
  z-index 999
  svg.loader-component-svg
    width: 3.75em;
    transform-origin: center;
    animation: rotate 2s linear infinite;
    circle
      fill: none;
      stroke: white;
      stroke-width: 2;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
</style>
