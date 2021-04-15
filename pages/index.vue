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

<script>
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Companies from '@/components/Companies'
export default {
  components: { Companies, About, Contact, Skills, Footer },
  head: {
    title: 'Jose Carlos Raya Leon',
    meta: [
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://victorious-moss-0c2edb703.azurestaticapps.net/',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Portfolio José Carlos Raya León',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Me\n' +
          '            dedico a la programación, tanto de sitios web como aplicaciones\n' +
          '            híbridas. Soy una persona alegre y simpática. Me apasiona la\n' +
          '            tecnología y siempre intento estar a la vanguardia. Dedico mi tiempo\n' +
          '            libre a los videojuegos, series y películas.',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: require('~/assets/meta-background.png'),
      },
    ],
  },
}
</script>

<style>
.container {
  @apply mx-auto flex text-center justify-center;
}
</style>
