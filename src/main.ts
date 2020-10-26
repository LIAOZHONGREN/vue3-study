import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
    console.log('errorHandler')
}
app.config.warnHandler = (msg, vm, trace) => {
    console.log('warnHandler')
}
app.config.globalProperties.title = 'Vue3学习'
//自定义指令
app.directive('insert', {
    mounted(el: Element, binding) {
        el.textContent = binding.value
    },
})
//自定义插件
app.use({
    install: (app, options) => {
        console.log(options)//options:{ tips: '安装自定义插件' }
        app.provide('pro', '自定义插件')
        app.config.globalProperties.$plugin = () => { console.log('安装了自定义插件') }
    }
}, { tips: '安装自定义插件' })

app.mount('#app')
