import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
/* import the bootstrap*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './styles/_global.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPaperPlane, faEnvelope, faClock, faPhone, faLocationDot, faHouse, faBurger, faTruck, faAddressBook, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faPaperPlane, faEnvelope, faClock, faPhone, faLocationDot, faHouse, faBurger, faTruck, faAddressBook, faFacebook, faPinterest, faInstagram, faStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(VueScrollTo).mount('#app')
