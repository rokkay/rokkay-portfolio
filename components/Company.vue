<template>
  <div class="w-full flex flex-wrap">
    <div class="w-1/2 mx-auto md:w-1/4 my-6 px-4">
      <img
        class="rounded-3xl mx-auto w-40 shadow-2xl"
        :src="logo"
        alt="profile-picture"
      />
    </div>
    <div class="md:w-3/4 mb-6 px-4 flex flex-col justify-center">
      <h4 class="text-2xl text-left">{{ name }}</h4>
      <h5 class="text-sm text-gray-700 text-left mb-2">{{ timestamp }}</h5>
      <p class="text-left" v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Company',
  props: {
    logo: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    timestamp: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
