import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass' // core Quasar styles
import './style.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // optional, leave empty if no Dialog, Notify, etc.
})

app.mount('#app') // <-- mount **only once**
