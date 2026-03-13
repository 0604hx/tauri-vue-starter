<template>
    <n-element style="position:fixed;z-index: 999;bottom: -15px;right:-15px;width: 44px;height:44px;">
        <n-popover trigger="click" style="width: 200px" v-model:show="show" placement="top-end">
            <template #trigger>
                <n-button circle quaternary size="tiny" type="primary"><template #icon><Settings /></template></n-button>
            </template>
            <template #header>
                <div class="text-center">
                    <n-text :depth="3" class="text-xs">当前版本：{{ version }}</n-text>
                </div>
            </template>

            <n-space vertical>
                <n-button secondary type="primary" block @click="jump('Home')">前往首页</n-button>
                <n-button secondary type="primary" block @click="jump('Setting')">系统设置</n-button>
                <n-button secondary type="primary" block @click="jump('Changelog')">更新日志</n-button>
            </n-space>
        </n-popover>
    </n-element>
</template>

<script setup>
    import { Settings } from 'lucide-vue-next'

    const router = useRouter()
    const version = _VERSION_

    let show = ref(false)
    const jump = name => {
        router.push({ name })
        show.value = false
    }
</script>
