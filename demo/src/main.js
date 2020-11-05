import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import pk from 'pk'

const app = createApp(App)
app.use(pk)
app.mount('#app')
