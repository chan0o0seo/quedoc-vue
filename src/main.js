import { createApp } from 'vue'
import './styles/MemPsn.css'
import './styles/MemHonldentVerf.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'
import vuetify from './plugins/vuetify'

const app = createApp(App);
app.use(router);
app.use(createMetaManager);
app.use(vuetify)
app.mount('#app')
