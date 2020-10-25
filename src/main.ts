import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
    console.log('errorHandler')
}
app.config.warnHandler = function (msg, vm, trace) {
    console.log('warnHandler')
}
app.config.globalProperties.title = 'Vue3学习'
app.mount('#app')