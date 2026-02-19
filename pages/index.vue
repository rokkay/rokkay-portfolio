<template>
  <div>
    <Header></Header>
    <main>
      <About></About>
      <Skills></Skills>
      <Companies></Companies>
      <Contact></Contact>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
const ogImage = new URL('~/assets/meta-background.png', import.meta.url).href

useSeoMeta({
  title: 'Jose Carlos Raya Leon',
  ogType: 'website',
  ogUrl: 'https://victorious-moss-0c2edb703.azurestaticapps.net/',
  ogTitle: 'Portfolio Jose Carlos Raya Leon',
  ogDescription:
    'Me dedico a la programacion, tanto de sitios web como aplicaciones hibridas. Soy una persona alegre y simpatica. Me apasiona la tecnologia y siempre intento estar a la vanguardia. Dedico mi tiempo libre a los videojuegos, series y peliculas.',
  ogImage,
})
</script>

<style>
.container {
  @apply mx-auto flex text-center justify-center;
}
</style>
