import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAt,
  faMobileAlt,
  faEnvelope,
  faArrowDown,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTelegram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faAt,
  faMobileAlt,
  faEnvelope,
  faArrowDown,
  faHeart,
  faTelegram,
  faLinkedin,
  faGithub
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
