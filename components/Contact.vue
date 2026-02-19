<template>
  <section id="contact" class="py-20">
    <div class="section-frame">
      <div class="w-full px-1 py-2 md:px-2">
        <h3
          class="font-bold uppercase text-2xl md:text-4xl w-full my-2 text-slate-900"
        >
          Contacto
        </h3>
        <p class="mb-8 w-full text-sm text-slate-600 md:text-base">
          Si quieres comentar una oportunidad o un proyecto, estaré encantado de
          hablar contigo.
        </p>

        <form
          class="grid w-full grid-cols-1 gap-5 lg:grid-cols-2"
          method="post"
          @submit.prevent="checkForm"
        >
          <div
            class="w-full rounded-3xl border border-slate-200 bg-white p-4 md:p-6 shadow-lg shadow-slate-200/50"
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block text-slate-700 text-sm font-semibold mb-2"
                  for="grid-first-name"
                >
                  Nombre
                </label>
                <input
                  id="grid-first-name"
                  v-model="firstName"
                  :class="
                    errors.firstName.error
                      ? 'border-red-500'
                      : 'border-gray-200'
                  "
                  class="appearance-none block w-full bg-white text-slate-900 border border-slate-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 placeholder-slate-400"
                  type="text"
                  placeholder="Nombre"
                />
                <p
                  v-show="errors.firstName.error"
                  class="text-red-600 text-xs"
                >
                  {{ errors.firstName.error }}
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block text-slate-700 text-sm font-semibold mb-2"
                  for="grid-last-name"
                >
                  Apellidos
                </label>
                <input
                  id="grid-last-name"
                  v-model="lastName"
                  :class="
                    errors.lastName.error ? 'border-red-500' : 'border-gray-200'
                  "
                  class="appearance-none block w-full bg-white text-slate-900 border border-slate-300 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 placeholder-slate-400"
                  type="text"
                  placeholder="Apellidos"
                />
                <p
                  v-show="errors.lastName.error"
                  class="text-red-600 text-xs"
                >
                  {{ errors.lastName.error }}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block text-slate-700 text-sm font-semibold mb-2"
                  for="grid-subject"
                >
                  Asunto
                </label>
                <input
                  id="grid-subject"
                  v-model="subject"
                  :class="
                    errors.subject.error ? 'border-red-500' : 'border-gray-200'
                  "
                  class="appearance-none block w-full bg-white text-slate-900 border border-slate-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 placeholder-slate-400"
                  type="text"
                  placeholder="Asunto"
                />
                <p
                  v-show="errors.subject.error"
                  class="text-red-600 text-xs"
                >
                  {{ errors.subject.error }}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block text-slate-700 text-sm font-semibold mb-2"
                  for="grid-email"
                >
                  Correo electrónico
                </label>
                <input
                  id="grid-email"
                  v-model="email"
                  :class="
                    errors.email.error ? 'border-red-500' : 'border-gray-200'
                  "
                  class="appearance-none block w-full bg-white text-slate-900 border border-slate-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 placeholder-slate-400"
                  type="email"
                  placeholder="tuemail@dominio.com"
                />
                <p
                  v-show="errors.email.error"
                  class="text-red-600 text-xs"
                >
                  {{ errors.email.error }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-full rounded-3xl border border-slate-200 bg-white p-4 md:p-6 shadow-lg shadow-slate-200/50"
          >
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <label
                  class="block text-slate-700 text-sm font-semibold mb-2"
                  for="grid-message"
                >
                  Mensaje
                </label>
                <textarea
                  id="grid-message"
                  v-model="message"
                  name="grid-message"
                  cols="30"
                  rows="10"
                  :class="
                    errors.message.error ? 'border-red-500' : 'border-gray-200'
                  "
                  class="appearance-none block w-full bg-white text-slate-900 border border-slate-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 placeholder-slate-400"
                  placeholder="Deja aquí tu mensaje"
                ></textarea>
                <p
                  v-show="errors.message.error"
                  class="text-red-600 text-xs"
                >
                  {{ errors.message.error }}
                </p>
                <!--                <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>-->
              </div>
            </div>
            <div class="mb-2">
              <button
                class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-300 to-cyan-300 px-6 py-3 font-semibold text-slate-950 transition-all duration-150 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                type="submit"
              >
                <i class="fa fa-paper-plane"></i> Enviar
              </button>
            </div>
            <p
              v-if="submitMessage"
              class="text-sm"
              :class="statusClass"
            >
              {{ submitMessage }}
            </p>
          </div>
        </form>

        <div
          class="flex flex-wrap justify-around max-w-3xl w-full mx-auto mt-12 mb-2 text-slate-700"
        >
          <ul class="flex w-full flex-col md:flex-row items-center gap-3 md:gap-6">
            <li>
              <a
                class="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:border-slate-300 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 md:w-auto"
                href="https://t.me/Rokkay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  class="text-2xl mr-2"
                  :icon="faTelegram"
                ></font-awesome-icon>
                Rokkay
              </a>
            </li>
            <li>
              <a
                class="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:border-slate-300 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 md:w-auto"
                href="tel:638564461"
              >
                <font-awesome-icon
                  class="text-2xl mr-2"
                  :icon="faMobileAlt"
                ></font-awesome-icon>
                638 564 461
              </a>
            </li>
            <li>
              <a
                class="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center shadow-sm transition hover:border-slate-300 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 md:w-auto md:text-left"
                href="mailto:rayaleonjosecarlos@gmail.com"
              >
                <font-awesome-icon
                  class="text-2xl mr-2"
                  :icon="faAt"
                ></font-awesome-icon>
                <span class="break-all md:break-normal">rayaleonjosecarlos@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
import { faMobileAlt, faAt } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Contact',
  data() {
    return {
      firstName: '',
      lastName: '',
      subject: '',
      email: '',
      message: '',
      submitMessage: '',
      submitStatus: '',
      errors: {
        firstName: {
          error: '',
        },
        lastName: {
          error: '',
        },
        subject: {
          error: '',
        },
        email: {
          error: '',
        },
        message: {
          error: '',
        },
      },
    }
  },
  watch: {
    firstName(newValue, oldValue) {
      if (this.firstName) {
        this.errors.firstName.error = ''
      }
    },
    lastName(newValue, oldValue) {
      if (this.lastName) {
        this.errors.lastName.error = ''
      }
    },
    subject(newValue, oldValue) {
      if (this.subject) {
        this.errors.subject.error = ''
      }
    },
    email(newValue, oldValue) {
      if (this.email) {
        this.errors.email.error = ''
      }
    },
    message(newValue, oldValue) {
      if (this.message) {
        this.errors.message.error = ''
      }
    },
  },
  computed: {
    faAt() {
      return faAt
    },
    faMobileAlt() {
      return faMobileAlt
    },
    faTelegram() {
      return faTelegram
    },
    statusClass() {
      return this.submitStatus === 'error' ? 'text-red-700' : 'text-emerald-700'
    },
  },
  methods: {
    async checkForm(e) {
      this.submitMessage = ''
      this.submitStatus = ''

      if (!this.firstName) {
        this.errors.firstName.error = 'El nombre es obligatorio'
      }

      if (!this.lastName) {
        this.errors.lastName.error = 'Los apellidos son obligatorios'
      }

      if (!this.subject) {
        this.errors.subject.error = 'El asunto es obligatorio'
      }

      if (!this.email) {
        this.errors.email.error = 'El correo electrónico es obligatorio'
      }

      if (!this.message) {
        this.errors.message.error = 'El mensaje es obligatorio'
      }

      const isValid = _.every(this.errors, { error: '' })

      if (!isValid) return

      try {
        const config = useRuntimeConfig()
        if (
          process.client &&
          window.grecaptcha &&
          config.public.recaptchaSiteKey
        ) {
          await new Promise((resolve) => {
            window.grecaptcha.ready(resolve)
          })
          await window.grecaptcha.execute(config.public.recaptchaSiteKey, {
            action: 'contact_form',
          })
        }
      } catch (e) {
        console.error('Recaptcha error:', e)
      }

      try {
        const config = useRuntimeConfig()
        const endpoint = config.public.contactEndpoint || '/api/contact'

        await $fetch(endpoint, {
          method: 'POST',
          body: {
            firstName: this.firstName,
            lastName: this.lastName,
            subject: this.subject,
            email: this.email,
            message: this.message,
          },
        })
        this.submitStatus = 'success'
        this.submitMessage = `${this.firstName}, gracias por contactar. Responderé lo antes posible.`
      } catch (e) {
        console.error(e)
        this.submitStatus = 'error'
        this.submitMessage =
          'No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos.'
      }
    },
  },
}
</script>

<style scoped></style>
