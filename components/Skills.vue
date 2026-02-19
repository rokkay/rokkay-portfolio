<template>
  <section id="skills" class="py-20">
    <div class="section-frame">
      <div class="rounded-[2rem] bg-slate-950 px-6 py-10 text-white md:px-10">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300"
            >
              Stack y objetivos
            </p>
            <h3 class="mt-2 text-3xl font-bold md:text-4xl">
              Tecnologías con las que construyo y evoluciono productos.
            </h3>
          </div>
          <span
            class="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm"
            >Perfil técnico actualizado</span
          >
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <article class="h-full rounded-3xl border border-white/10 bg-white/5 p-5">
            <h4 class="text-xl font-bold">Controlo de</h4>
            <p class="mt-2 text-sm text-slate-300">
              Tecnologías y herramientas con experiencia profesional
              consolidada.
            </p>
            <div class="mt-4 flex flex-wrap gap-3">
              <div
                v-for="skill in masteredSkills"
                :key="`mastered-${skill.name}`"
                class="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-2 text-sm"
              >
                <component :is="skill.icon" v-if="skill.icon" class="h-4 w-4" />
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </article>

          <article class="h-full rounded-3xl border border-white/10 bg-white/5 p-5 lg:col-span-2 xl:col-span-1">
            <h4 class="text-xl font-bold">Quiero trabajar con</h4>
            <p class="mt-2 text-sm text-slate-300">
              Próximas apuestas para ampliar impacto técnico y arquitectura
              distribuida.
            </p>
            <div class="mt-4 flex flex-wrap gap-3">
              <div
                v-for="skill in targetSkills"
                :key="`target-${skill.name}`"
                class="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-sm"
              >
                <component :is="skill.icon" v-if="skill.icon" class="h-4 w-4" />
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </article>

          <article class="h-full rounded-3xl border border-white/10 bg-white/5 p-5">
            <h4 class="text-xl font-bold">Prefiero no trabajar con</h4>
            <p class="mt-2 text-sm text-slate-300">
              Tecnologías fuera de mi foco para maximizar especialización y
              valor.
            </p>
            <div class="mt-4 flex flex-wrap gap-3">
              <div
                v-for="skill in avoidSkills"
                :key="`avoid-${skill.name}`"
                class="inline-flex items-center gap-2 rounded-full border border-rose-300/35 bg-rose-300/10 px-3 py-2 text-sm"
              >
                <component :is="skill.icon" v-if="skill.icon" class="h-4 w-4" />
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  AngularLogo,
  DockerLogo,
  DrupalLogo,
  GitLogo,
  GitHubLogo,
  JavaLogo,
  JavaScriptLogo,
  LaravelLogo,
  NodeJSLogo,
  PHPLogo,
  TailwindLogo,
  VueLogo,
} from '~/utils/logos'

export default {
  name: 'Skills',
  data() {
    return {
      masteredSkills: [
        { name: 'Angular2+', icon: AngularLogo },
        { name: 'API' },
        { name: 'Docker', icon: DockerLogo },
        { name: 'Drupal', icon: DrupalLogo },
        { name: 'Git', icon: GitLogo },
        { name: 'GitHub', icon: GitHubLogo },
        { name: 'JavaScript', icon: JavaScriptLogo },
        { name: 'Jira' },
        { name: 'Laravel', icon: LaravelLogo },
        { name: 'MySQL' },
        { name: 'PHP', icon: PHPLogo },
        { name: 'Solr' },
        { name: 'Symfony' },
        { name: 'Tailwind', icon: TailwindLogo },
        { name: 'Twig' },
        { name: 'Vue', icon: VueLogo },
        { name: 'Webpack' },
      ],
      targetSkills: [
        { name: 'AWS' },
        { name: 'Go' },
        { name: 'Kafka' },
        { name: 'Keycloak' },
        { name: 'NodeJS', icon: NodeJSLogo },
        { name: 'RabbitMQ' },
        { name: 'Redis' },
      ],
      avoidSkills: [{ name: 'Java', icon: JavaLogo }],
    }
  },
}
</script>

<style scoped></style>
