<template>
    <Layout title="设置">
        <n-card size="small" title="修改后自动保存">
            <n-form label-placement="left" label-width="120px">
                <n-form-item label="主题色">
                    <n-popover placement="bottom-start" trigger="click" :width="360">
                        <template #trigger>
                            <n-button :color="store.color" size="small">{{ colorName }}</n-button>
                        </template>
                        <n-space vertical>
                            <n-text depth="3">请选择配色</n-text>
                            <n-grid :x-gap="6" :y-gap="6" :cols="4">
                                <n-gi v-for="(c, name) in colors">
                                    <n-button @click="changeColor(c, name)" block :color="c">
                                        <n-icon v-if="c==store.color" color="white" :component="Check"/>
                                        <template v-else>{{name}}</template>
                                    </n-button>
                                </n-gi>
                            </n-grid>
                            <n-input v-model:value="customColor" placeholder="自定义颜色（以 # 开头）">
                                <template #suffix>
                                    <n-button size="tiny" type="primary" secondary @click="changeColor(customColor, CUSTOM)">应用</n-button>
                                </template>
                            </n-input>
                        </n-space>
                    </n-popover>
                </n-form-item>
                <n-form-item label="启用暗黑模式">
                    <n-switch v-model:value="store.dark" />
                </n-form-item>
            </n-form>
        </n-card>
    </Layout>
</template>

<script setup>
    import { Check } from 'lucide-vue-next'
    import { useStore, colors } from '@/store'
    import { useMessage } from 'naive-ui'

    const store = useStore()
    const message = useMessage()

    const CUSTOM = "自定义"
    let customColor = ref("")

    /**
     * 从 store 中获取 colorName 配置
     */
    const colorName = computed(()=> {
        for (const name in colors) {
            if (colors[name] == store.color)
                return name
        }
        return CUSTOM
    })

    const changeColor = (c, name)=>{
        if(!c)  return message.warning(`无效的颜色值`)
        if(!c.startsWith("#"))
            c = `#${c}`

        store.color = c
        message.info(`主题色切换为⌈${name}⌋`)
    }
    const initColor = ()=>{
        if (colorName.value == CUSTOM)
            customColor.value = store.color
    }

    onMounted( initColor )
</script>