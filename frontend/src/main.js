import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import $ from "jquery"
// import { library } from '@fortawesome/fontawesome-svg-core'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'


// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const app = createApp(App)
app.use(PrimeVue);
// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
