import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/style.scss'

import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/github.css'

import naiveui from 'naive-ui'

const app = createApp(App)
app.use(router)
app.use(naiveui)
app.mount('#app')
