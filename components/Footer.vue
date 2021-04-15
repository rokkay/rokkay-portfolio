<template>
  <footer>
    <div
      class="absolute flex flex-col md:flex-row bg-gray-900 py-4 w-full justify-between leading-10 px-8"
    >
      <div class="flex space-x-4 items-center">
        <span class="text-white text-sm">
          Hecho con
          <font-awesome-icon
            class="text-lg text-red-500 mx-1"
            :icon="faHeart"
          ></font-awesome-icon>
          por José Carlos Raya León
        </span>
      </div>
      <div class="flex space-x-4 text-sm justify-center">
        <a
          href="https://www.linkedin.com/in/jose-carlos-raya-leon/"
          aria-label="Github"
          class="text-white"
          target="_blank"
        >
          <font-awesome-icon
            class="text-lg text-blue-700"
            :icon="faLinkedin"
          ></font-awesome-icon>
          Linkedin
        </a>
        <a
          href="https://github.com/rokkay"
          aria-label="Github"
          class="text-white"
          target="_blank"
        >
          <font-awesome-icon
            class="text-lg"
            :icon="faGithub"
          ></font-awesome-icon>
          Github
        </a>
      </div>
    </div>
    <a class="hidden" href="https://www.freepik.es/vectores/icono"
      >Vector de Icono creado por fullvector - www.freepik.es</a
    >
  </footer>
</template>

<script>
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'Footer',
  computed: {
    faLinkedin() {
      return faLinkedin
    },
    faGithub() {
      return faGithub
    },
    faHeart() {
      return faHeart
    },
  },
}
</script>

<style scoped></style>
