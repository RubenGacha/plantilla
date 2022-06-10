import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "highlight.js/styles/monokai-sublime.css"
import Markdown from "vue3-markdown-it"
import VueClipboard from 'vue3-clipboard'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Mathjax, {initMathJax,renderByMathjax} from "mathjax-vue3"
import vue3Highlight from 'vue3-highlightjs'

function onMathJaxReady(){
    const el = document.getElementById("cuerpo")
    renderByMathjax(el)
}

initMathJax({},onMathJaxReady)

createApp(App)
.use(store)
.use(router)
.use(Mathjax)
.use(vue3Highlight)
.use(Markdown)
.use(VueClipboard)
.use(VueAxios,axios)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
