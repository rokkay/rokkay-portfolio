<template>
  <section id="contact" class="py-6 bg-gray-800">
    <div class="container">
      <div class="w-full flex flex-wrap px-4">
        <h3
          class="font-bold uppercase text-2xl md:text-4xl w-full my-6 text-white"
        >
          Contacto
        </h3>

        <form
          class="w-full flex flex-wrap justify-around"
          method="post"
          @submit.prevent="checkForm"
        >
          <div class="max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
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
                  class="appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder-gray-900"
                  type="text"
                  placeholder="Jane"
                />
                <p
                  v-show="errors.firstName.error"
                  class="text-red-500 text-xs italic"
                >
                  {{ errors.firstName.error }}
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
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
                  class="appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-gray-900"
                  type="text"
                  placeholder="Doe"
                />
                <p
                  v-show="errors.lastName.error"
                  class="text-red-500 text-xs italic"
                >
                  {{ errors.lastName.error }}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
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
                  class="appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-gray-900"
                  type="text"
                  placeholder="Asunto"
                />
                <p
                  v-show="errors.subject.error"
                  class="text-red-500 text-xs italic"
                >
                  {{ errors.subject.error }}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Correo electrónico
                </label>
                <input
                  id="grid-password"
                  v-model="email"
                  :class="
                    errors.email.error ? 'border-red-500' : 'border-gray-200'
                  "
                  class="appearance-none block w-full bg-gray-200 text-gray-800 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-gray-900"
                  type="email"
                  placeholder="janedoe@mail.com"
                />
                <p
                  v-show="errors.email.error"
                  class="text-red-500 text-xs italic"
                >
                  {{ errors.email.error }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
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
                  class="appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-gray-900"
                  placeholder="Deja aquí tu mensaje"
                ></textarea>
                <p
                  v-show="errors.message.error"
                  class="text-red-500 text-xs italic"
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
                class="p-2 rounded-2xl w-1/2 md:w-mx-auto text-white bg-gradient-to-br to-pink-700 from-red-600 hover:shadow-2xl transition-all duration-75"
                type="submit"
              >
                <i class="fa fa-paper-plane"></i> Enviar
              </button>
            </div>
            <p
              v-if="submitMessage"
              class="text-white text-sm"
              :class="statusClass"
            >
              {{ submitMessage }}
            </p>
          </div>
        </form>

        <div
          class="flex flex-wrap justify-around max-w-2xl w-full mx-auto mt-12 mb-6 text-gray-500"
        >
          <ul class="flex flex-col md:flex-row items-center space-x-4">
            <li class="mb-3">
              <a class="flex items-center" href="https://t.me/Rokkay"
                ><font-awesome-icon
                  class="text-2xl mr-2"
                  :icon="faTelegram"
                ></font-awesome-icon>
                Rokkay</a
              >
            </li>
            <li class="mb-3">
              <a class="flex items-center" href="tel:638564461">
                <font-awesome-icon
                  class="text-2xl mr-2"
                  :icon="faMobileAlt"
                ></font-awesome-icon>
                638 564 461</a
              >
            </li>
            <li class="mb-3">
              <a
                class="flex items-center"
                href="mailto:rayaleonjosecarlos@gmail.com"
                ><font-awesome-icon
                  class="text-2xl mr-2"
                  :icon="faAt"
                ></font-awesome-icon>
                rayaleonjosecarlos@gmail.com</a
              >
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
      return this.submitStatus === 'error' ? 'text-red-300' : 'text-green-300'
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
        await $fetch('/SendEmail', {
          baseURL: config.public.apiBase,
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
        this.submitMessage = `${this.firstName} gracias por contactar, respondere lo antes posible.`
      } catch (e) {
        console.error(e)
        this.submitStatus = 'error'
        this.submitMessage =
          'No se pudo enviar el mensaje. Intentalo de nuevo en unos minutos.'
      }
    },
  },
}
</script>

<style scoped></style>
