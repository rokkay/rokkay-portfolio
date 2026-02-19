<template>
  <footer class="bg-slate-950">
    <div
      class="section-frame flex w-full flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left"
    >
      <div class="flex items-center justify-center md:justify-start">
        <span class="text-sm leading-relaxed text-white">
          Hecho con
          <font-awesome-icon
            class="text-lg text-red-500 mx-1"
            :icon="faHeart"
          ></font-awesome-icon>
          por José Carlos Raya León
        </span>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-3 text-sm">
        <a
          href="https://www.linkedin.com/in/jose-carlos-raya-leon/"
          aria-label="Linkedin"
          class="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon
            class="text-lg text-blue-300"
            :icon="faLinkedin"
          ></font-awesome-icon>
          LinkedIn
        </a>
        <a
          href="https://github.com/rokkay"
          aria-label="Github"
          class="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          target="_blank"
          rel="noopener noreferrer"
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
