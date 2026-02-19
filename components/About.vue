<template>
  <section id="about" class="py-6">
    <div class="container">
      <div class="w-full flex flex-wrap items-center">
        <h3 class="font-bold uppercase text-2xl md:text-4xl w-full mt-6">
          Sobre mí
        </h3>
        <div class="w-1/2 mx-auto md:w-1/4 mb-6 px-4">
          <img class="rounded-full" :src="profileImage" alt="profile-picture" />
        </div>
        <div class="md:w-3/4 mb-6 px-4 flex items-center text-left flex-wrap">
          <p class="mb-6">
            Mi nombre es José Carlos Raya León y tengo {{ getAge }} años. Me
            dedico a la programación, tanto de sitios web como aplicaciones
            híbridas. Soy una persona alegre y simpática. Me apasiona la
            tecnología y siempre intento estar a la vanguardia. Dedico mi tiempo
            libre a los videojuegos, series y películas.
          </p>

          <p class="mb-6">
            Tengo una buena capacidad de autoaprendizaje y no tengo miedo a
            nuevas tecnologías. He realizado trabajos tanto de backend como
            frontend, además también he trabajado realizando un juego con Unity.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from '~/assets/jose-carlos-raya-profile.jpg'

export default {
  name: 'About',
  data() {
    return {
      profileImage,
    }
  },
  computed: {
    getAge() {
      const today = new Date()
      const birthDate = new Date(1996, 7, 15)

      let diff = (birthDate.getTime() - today.getTime()) / 1000
      diff /= 60 * 60 * 24
      return Math.abs(Math.round(diff / 365.25))
    },
  },
}
</script>

<style scoped></style>
