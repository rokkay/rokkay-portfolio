<template>
  <section id="about" class="py-20">
    <div class="section-frame">
      <div class="panel-surface p-6 md:p-10">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600"
        >
          Sobre mí
        </p>
        <p class="mt-2 text-sm text-slate-500">
          Información alineada con mi perfil profesional en Manfred.
        </p>
        <div class="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div class="mx-auto max-w-xs">
            <img
              class="w-full rounded-3xl border border-white/80 shadow-2xl"
              :src="profileImage"
              alt="Foto de José Carlos Raya León"
            />
            <p class="mt-4 text-center text-sm text-slate-600">
              {{ getAge }} años · Montilla, España
            </p>
          </div>

          <div>
            <h3 class="text-3xl font-bold leading-tight md:text-4xl">
              Backend sólido, software escalable y mejora continua.
            </h3>
            <p class="mt-4 text-base leading-relaxed text-slate-700">
              Soy desarrollador backend especializado en aplicaciones web y
              servicios con PHP, Laravel y Symfony. Participo en el ciclo
              end-to-end: análisis, diseño técnico, implementación y despliegue.
            </p>
            <p class="mt-4 text-base leading-relaxed text-slate-700">
              Trabajo con enfoque en calidad usando principios SOLID, pruebas
              unitarias y funcionales, automatización y entornos reproducibles
              con Docker. Me adapto rápido, aprendo de forma constante y
              disfruto resolviendo retos técnicos complejos.
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <article
                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h4 class="text-lg font-bold text-slate-900">
                  Buenas prácticas
                </h4>
                <p class="mt-2 text-sm text-slate-700">
                  Clean Architecture, análisis estático, linters y modernización
                  de código para reducir deuda técnica.
                </p>
              </article>
              <article
                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h4 class="text-lg font-bold text-slate-900">
                  Mentalidad de producto
                </h4>
                <p class="mt-2 text-sm text-slate-700">
                  Me implico en el impacto real del software y colaboro con
                  equipos full stack para entregar valor.
                </p>
              </article>
            </div>
          </div>
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
