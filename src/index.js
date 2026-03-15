import { createApp, h } from "vue"
import dayjs from "dayjs"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import "./theme/index.css"
import "./theme/tailwind-mini.css"

import App from './App.vue'
import Layout from './widget/layout.vue'
import Tag from './widget/tag.vue'
import router from './router'

import { NConfigProvider, NMessageProvider, NDialogProvider, zhCN } from "naive-ui"

/*
主题配色，默认是 #18a058 （绿色）
naive-ui 主题配色，详见 https://www.naiveui.com/zh-CN/light/docs/customize-theme

如何自定义颜色：
    1. 打开 https://bgrins.github.io/TinyColor/
    2. 输入主颜色
    3. hover、suppl 颜色选 Monochromatic（第二个）或者 Brighten
    4. pressed 颜色选 Saturate
*/
const setupThemeColor = (color="#18a058", hoverColor, pressedColor)=>{
    const common = {
        primaryColor: color,
        //通用圆角，默认3px
        borderRadius: '6px',
    }
    if(hoverColor){
        common.primaryColorHover = hoverColor
        common.primaryColorSuppl = hoverColor
    }
    if(pressedColor)
        common.primaryColorPressed = pressedColor

    const ps = {
        common,
        Tag: {
            borderRadius: '6px'
        }
    }
    document.body.style.setProperty('--primary-color', color)
    return ps
}

const appWrapper = {
    render(){
        return h(
            NConfigProvider,
            { locale:zhCN, themeOverrides: setupThemeColor("#7851A9","#9665d3","#7538C2") },
            ()=>h(NDialogProvider, ()=>h(NMessageProvider, { duration: 4000, max:5 }, ()=> h(App)))
        )
    }
}

// 如果创建简单的页面（比如无需 vue-router），可以使用 appWrapper，然后在 App.vue 中写具体的功能
// const app = createApp(appWrapper)
const app = createApp(App)


app.config.globalProperties.filesize = window.filesize = (mem, fixed=0, split="")=>{
    if(!mem)    return ""

    var G = 0
    var M = 0
    var KB = 0
    mem >= (1 << 30) && (G = (mem / (1 << 30)).toFixed(fixed))
    mem >= (1 << 20) && (mem < (1 << 30)) && (M = (mem / (1 << 20)).toFixed(fixed))
    mem >= (1 << 10) && (mem < (1 << 20)) && (KB = (mem / (1 << 10)).toFixed(fixed))
    return G > 0
        ? G + split + 'GB'
        : M > 0
            ? M + split + 'MB'
            : KB > 0
                ? KB + split + 'KB'
                : mem + split + 'B'
}
app.config.globalProperties.datetime = window.datetime = (d=new Date(), format="YYYY-MM-DD HH:mm:ss")=>dayjs(d).format(format)

app.use(router)
//注册全局组件
app.component('Layout', Layout)
app.component('Tag', Tag)

const store = createPinia()
store.use(piniaPluginPersistedstate)
app.use(store)

app.mount("#root")

console.debug(
    `%c欢迎使用 · ${APP_TITLE} · 版本=${_VERSION_}`,
    "background:#722ED1;color:white;padding:2px 6px; font-size:14px"
)
