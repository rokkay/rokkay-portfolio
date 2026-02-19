<template>
  <section class="py-12">
    <div class="section-frame">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 md:p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
          Perfil completo
        </p>
        <h3 class="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
          ¿Quieres profundizar en mi trayectoria?
        </h3>
        <p class="mt-3 max-w-3xl text-slate-600">
          Puedes ver mi perfil profesional completo en Manfred con más detalle
          sobre experiencia, stack y objetivos.
        </p>
        <a
          href="https://www.getmanfred.com/perfil/jose-carlos-raya-leon"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
        >
          Ver perfil en Manfred
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ManfredProfile',
}
</script>

<style scoped></style>
