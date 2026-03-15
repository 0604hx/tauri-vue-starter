<template>
    <n-config-provider :locale="zhCN" :theme>
        <n-message-provider>
            <n-dialog-provider>
                <n-notification-provider>
                    <n-layout position="absolute">
                        <!--如需使用 naive-ui 提供的滚动条，则应该设置  :native-scrollbar="false" 同时 content-style 的 height 设置为自动 -->
                        <n-layout position="absolute" style="top: 0px;bottom:36px;" class="win-layout" :native-scrollbar="false">
                            <router-view />

                            <BottomMenu />
                        </n-layout>
                        <n-layout-footer position="absolute" style="height: 36px; padding:6px; text-align: center;" bordered>
                            <Footer />
                        </n-layout-footer>
                    </n-layout>
                </n-notification-provider>
            </n-dialog-provider>
        </n-message-provider>
    </n-config-provider>
</template>

<script setup>
    import { zhCN, darkTheme } from 'naive-ui'
    import { getCurrentWindow } from '@tauri-apps/api/window'

    import Footer from "@W/footer.vue"
    import BottomMenu from "@W/bottom-menu.vue"

    import { useStore } from "@/store"
    const store = useStore()

    /**
     * 从 store 中获取 theme 配置
     */
    const theme = computed(()=> store.dark ? darkTheme : null)

    /**
     * 修改窗口标题为页面标题，以保持一致性
     */
    onMounted(()=> getCurrentWindow().setTitle(document.title))
</script>
