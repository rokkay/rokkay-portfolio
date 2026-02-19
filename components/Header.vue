<template>
  <header class="relative min-h-screen overflow-hidden text-white">
    <div
      class="absolute inset-0 bg-center bg-no-repeat bg-cover"
      :style="heroStyle"
    ></div>
    <div class="absolute inset-0 bg-slate-950/70"></div>
    <div
      class="absolute inset-0 opacity-70"
      style="
        background:
          radial-gradient(
            circle at 12% 18%,
            rgba(20, 184, 166, 0.45) 0%,
            transparent 36%
          ),
          radial-gradient(
            circle at 88% 12%,
            rgba(249, 115, 98, 0.38) 0%,
            transparent 35%
          );
      "
    ></div>

    <div class="section-frame relative z-10 flex min-h-screen flex-col py-8">
      <nav class="reveal-up flex items-center justify-end">
        <a
          href="#contact"
          class="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          Hablemos
        </a>
      </nav>

      <div
        class="my-auto grid gap-8 py-10 xl:grid-cols-[1.35fr_1fr] xl:items-end"
      >
        <div>
          <p
            class="reveal-up reveal-delay-1 mb-4 inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm"
          >
            Backend Developer · APIs REST · Clean Architecture
          </p>
          <h1
            class="reveal-up reveal-delay-2 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl xl:whitespace-nowrap xl:text-7xl"
          >
            José Carlos Raya León
          </h1>
          <h2
            class="reveal-up reveal-delay-3 mt-4 text-xl font-semibold text-teal-200 sm:text-3xl"
          >
            Senior Software Developer
          </h2>
          <p
            class="reveal-up mt-6 max-w-2xl text-base text-white/85 md:text-lg"
          >
            Construyo software robusto y escalable con foco en backend PHP,
            diseño de APIs y calidad de código. Trabajo de extremo a extremo
            para llevar ideas a producción.
          </p>
          <div class="reveal-up mt-10 flex flex-wrap gap-3 md:gap-4">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-3 font-semibold text-slate-900 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:px-6"
            >
              <font-awesome-icon :icon="faEnvelope" /> Contacto
            </a>
            <a
              href="#skills"
              class="inline-flex items-center rounded-2xl border border-white/45 px-5 py-3 font-semibold transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:px-6"
            >
              Ver stack técnico
            </a>
          </div>
        </div>

        <section
          aria-labelledby="value-proposition-title"
          class="reveal-up w-full max-w-2xl rounded-3xl border border-white/40 bg-slate-950/88 p-6 text-left shadow-2xl md:p-7 xl:max-w-none"
        >
          <h3 id="value-proposition-title" class="text-xl font-bold text-white">
            En qué aporto valor
          </h3>
          <ul class="mt-4 space-y-4 text-base leading-relaxed text-slate-100">
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-300/20 text-teal-200">✓</span>
              <span>Diseño backend con Laravel y Symfony para productos mantenibles.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300/20 text-cyan-200">✓</span>
              <span>Automatizo calidad con testing, análisis estático y despliegues reproducibles.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-300/20 text-rose-200">✓</span>
              <span>Visión full stack para colaborar con frontend y producto sin fricción.</span>
            </li>
          </ul>
        </section>
      </div>

      <div class="reveal-up flex justify-center pb-4">
        <a
          href="#about"
          aria-label="Bajar al contenido"
          class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <font-awesome-icon
            class="animate-bounce text-xl"
            :icon="faArrowDown"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import heroBackground from '~/assets/hero-background.jpg'

export default {
  name: 'Header',
  computed: {
    faArrowDown() {
      return faArrowDown
    },
    faEnvelope() {
      return faEnvelope
    },
    heroStyle() {
      return {
        backgroundImage: `url(${heroBackground})`,
      }
    },
  },
}
</script>

<style scoped></style>
