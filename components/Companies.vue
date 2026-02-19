<template>
  <section class="py-20">
    <div class="section-frame">
      <div class="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-12">
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600"
          >
            Mi historia
          </p>
          <h3 class="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Trayectoria profesional
          </h3>
        </div>
        <p class="max-w-xl text-sm text-slate-600">
          Experiencia en proyectos backend y full stack, con foco actual en
          arquitectura, APIs y calidad de software.
        </p>
      </div>

      <div class="relative mx-auto max-w-5xl space-y-6 md:space-y-7">
        <div
          aria-hidden="true"
          class="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-teal-200 via-slate-300 to-transparent md:left-5"
        ></div>

        <article
          v-for="company in companies"
          :key="company.name"
          class="relative pl-12 md:pl-14"
        >
          <span
            aria-hidden="true"
            class="absolute left-2 top-10 h-4 w-4 rounded-full border-4 border-teal-500 bg-white md:left-3"
          ></span>

          <div class="panel-surface rounded-3xl p-5 transition hover:-translate-y-0.5 md:p-7">
            <div class="flex flex-wrap items-start gap-4">
              <img
                v-if="company.logo"
                :src="company.logo"
                :alt="`Logo ${company.name}`"
                class="h-14 w-14 rounded-2xl border border-slate-200 object-cover"
              />
              <div
                v-else
                class="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-base font-extrabold text-slate-700"
                :aria-label="`Iniciales de ${company.name}`"
              >
                {{ companyInitials(company.name) }}
              </div>
              <div>
                <h4 class="text-2xl font-bold text-slate-900">
                  {{ company.name }}
                </h4>
                <p
                  class="text-sm font-semibold uppercase tracking-wide text-slate-500"
                >
                  {{ company.timestamp }}
                </p>
              </div>
            </div>
            <p class="mt-4 leading-relaxed text-slate-700">
              {{ company.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import excelenticLogo from '~/assets/excelentic-logo.png'
import wapmaniaLogo from '~/assets/wapmania-logo.jpg'
import outletSaludLogo from '~/assets/outlet-salud-logo.jpg'

export default {
  name: 'Companies',
  data() {
    return {
      companies: [
        {
          logo: null,
          name: 'Solucionex',
          timestamp: 'Mayo 2021 - Actualidad',
          description:
            'Senior Backend Software Developer, centrado en soluciones con Symfony y Drupal para proyectos completos desde análisis hasta producción. Trabajo en arquitectura, APIs, migraciones complejas y optimización con Solr, Docker y herramientas de automatización de calidad.',
        },
        {
          logo: excelenticLogo,
          name: 'Excelentic',
          timestamp: 'Noviembre 2018 - Mayo 2021',
          description:
            'Participación en proyectos diversos de backend y full stack: APIs y servicios con Laravel, webs con Drupal y Vue, y soluciones con despliegues estructurados. He evolucionado hacia un perfil enfocado en arquitectura de software, escalabilidad y calidad continua.',
        },
        {
          logo: wapmaniaLogo,
          name: 'Wapmania',
          timestamp: 'Marzo 2018 - Junio 2018',
          description:
            'Desarrollo de aplicaciones con Laravel y colaboración en tareas de documentación técnica y propuesta de mejoras funcionales, consolidando buenas bases de desarrollo web profesional.',
        },
        {
          logo: outletSaludLogo,
          name: 'Outlet Salud',
          timestamp: 'Marzo 2015 - Junio 2015',
          description:
            'Soporte técnico de equipos, mantenimiento de sitios web y desarrollo en PHP sobre proyectos existentes, además de tareas relacionadas con redes e infraestructura de oficina.',
        },
      ],
    }
  },
  methods: {
    companyInitials(name) {
      return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    },
  },
}
</script>

<style scoped></style>
