<template>
  <div class="text-slate-900">
    <Header></Header>
    <main>
      <About></About>
      <ManfredProfile></ManfredProfile>
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
    'Senior Software Developer especializado en backend PHP con Laravel y Symfony, diseño de APIs REST, arquitectura de software y calidad continua con testing y automatización.',
  ogImage,
})
</script>
