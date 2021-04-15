<template>
  <section class="py-6">
    <div class="container">
      <div class="w-full flex flex-wrap">
        <h3 class="font-bold uppercase text-2xl md:text-4xl w-full my-6">
          Trayectoria
        </h3>
        <div class="divide-y-2 divide-gray-400">
          <Company
            :logo="require('~/assets/excelentic-logo.png?webp')"
            name="Excelentic"
            timestamp="18/11/2018 - Actualidad"
            description="Excelentic ha sido mi toma real de contacto con el mundo laboral.He pasado por varios proyectos, entre los que hay bastante diversidad: Desarrollo de aplicaciones para móviles con Ionic con backend en Laravel. Páginas web en Drupal 8 con VueJs usando TailwindCSS para el diseño. Juegos móviles multijugador con Unity."
          ></Company>
          <Company
            :logo="require('~/assets/wapmania-logo.jpg?webp')"
            name="Wapmania"
            timestamp="Marzo 2018 - Junio 2018"
            description="Durante mi estancia en Wapmanía estuve desarrollando aplicaciones con el framework de PHP Laravel, además de usar Bootstrap para el diseño. También realicé la documentación de las aplicaciones desarrolladas así como el aporte de nuevas ideas para los proyectos."
          ></Company>
          <Company
            :logo="require('~/assets/outlet-salud-logo.jpg?webp')"
            name="Outlet Salud"
            timestamp="Marzo 2015 - Junio 2015"
            description="Mis funciones en Outlet salud fueron la de poner a punto los equipos informáticos así como el desarrollo de páginas web en Wordpress y programación para páginas ya existentes en PHP. También realicé algunas tareas relacionadas con las redes."
          ></Company>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Company from '@/components/Company'
export default {
  name: 'Companies',
  components: { Company },
}
</script>

<style scoped></style>
