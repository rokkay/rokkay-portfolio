<template>
  <div
    class="text-center mb-6 pie-wrapper relative flex items-center justify-center"
  >
    <svg :height="radius * 2" :width="radius * 2">
      <circle
        stroke="white"
        :stroke-dasharray="circumference + ' ' + circumference"
        :stroke-width="stroke"
        fill="#2d3748"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
      <circle
        :stroke="fill"
        :stroke-dasharray="circumference + ' ' + circumference"
        :style="{ strokeDashoffset: strokeDashoffset }"
        :stroke-width="stroke"
        fill="transparent"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
    </svg>
    <div class="w-10 absolute" :style="{ fill }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  components: {},
  props: {
    name: {
      type: String,
      default: '',
    },
    level: {
      type: Number,
      default: 0,
    },
    radius: {
      type: Number,
      default: 70,
    },
    fill: {
      type: String,
      default: 'green',
    },
    stroke: {
      type: Number,
      default: 14,
    },
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI
    const progress = this.level * 10

    return {
      normalizedRadius,
      circumference,
      progress,
    }
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference
    },
  },
}
</script>

<style scoped>
circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.logo-center {
  top: 50%;
  left: 50%;
}
</style>
