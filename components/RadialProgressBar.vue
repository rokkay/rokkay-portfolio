<template>
  <div></div>
</template>

<script>
export default {
  name: 'RadialProgressBar',
  components: {},
  props: {
    radius: {
      type: Number,
      default: 80,
    },
    progress: {
      type: Number,
      default: 50,
    },
    stroke: {
      type: Number,
      default: 16,
    },
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI

    return {
      normalizedRadius,
      circumference,
    }
  },
  computed: {
    strokeDashoffset() {
      /* eslint-disable */
      return this.circumference - (this.progress / 100) * this.circumference
    },
  },
  created() {
    // let filename = require('~/assets/skills/csharp.svg');
    //  fetch(filename).then((resp) => resp.text()).then(function(data) {
    //    document.querySelectorAll(".inbox").innerHTML = data;
    //  });
  },
}
</script>

<style scoped>
circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
object svg {
  fill: currentColor;
}
</style>
