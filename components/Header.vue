<template>
  <header class="h-screen">
    <div class="hero-image h-full bg-center bg-no-repeat bg-cover relative">
      <div class="w-full h-full bg-black opacity-25 absolute"></div>
      <div
        class="hero-text h-full justify-center flex flex-col text-center max-w-3xl mx-auto relative z-10"
      >
        <h1 class="text-3xl md:text-6xl text-white font-bold">
          José Carlos Raya León
        </h1>
        <h2 class="text-2xl md:text-5xl text-white font-medium mb-12">
          Programador
        </h2>
        <a
          class="p-4 rounded-2xl w-1/2 md:w-1/3 md:w- mx-auto text-white bg-gradient-to-br to-pink-700 from-red-600 hover:shadow-2xl transition-all duration-75"
          href="#contact"
        >
          <font-awesome-icon :icon="faEnvelope" /> Contacto
        </a>
        <div
          class="bottom-0 absolute flex justify-center text-center w-full mb-12"
        >
          <a class="bottom-0" href="#about">
            <font-awesome-icon
              class="text-3xl text-white animate-bounce end"
              :icon="faArrowDown"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'Header',
  computed: {
    faArrowDown() {
      return faArrowDown
    },
    faEnvelope() {
      return faEnvelope
    },
  },
}
</script>

<style scoped>
.hero-image {
  background-image: url('~assets/hero-background.jpg?webp');
}
</style>
