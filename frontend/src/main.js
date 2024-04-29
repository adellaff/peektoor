import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

// import { library } from '@fortawesome/fontawesome-svg-core'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const app = createApp(App)

// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
