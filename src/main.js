import { createApp } from 'vue'
import App from './App.vue'
import style from './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import { windowScrollPosition } from '@/assets/window-scroll-position.js'

import VueKinesis from "vue-kinesis";

const app = createApp(App)
app.use(style)
app.use(MotionPlugin)
app.use(windowScrollPosition)
app.use(VueKinesis)
app.mount('#app')
