<template>
    <Layout title="首页" :headerBack="false">
        <n-card>
            <template #header>
                <n-space>
                    <Info class="mt-1" size="22px" />
                    <div>关于</div>
                </n-space>
            </template>
            <n-space vertical>
                <div>
                    <Tag class="mr-1">Tauri Vue Starter</Tag>是基于 Tauri2、Vue3、Naive UI 组件库的快速开发模板。
                </div>

                <n-space>
                    <n-button type="primary">Gitcode仓库</n-button>
                    <n-button type="primary">作者博客</n-button>
                </n-space>
            </n-space>
        </n-card>

        <n-card class="mt-3">
            <template #header>
                <n-space>
                    <SquareTerminal class="mt-1" size="22px"/>
                    <div>依赖库</div>
                </n-space>
            </template>
            <n-descriptions class="mt-4" label-placement="left" bordered :column="3" size="small">
                <n-descriptions-item v-for="(version, name) in devDependencies" :label="name">{{version}}</n-descriptions-item>
            </n-descriptions>
        </n-card>
    </Layout>
</template>
<script setup>
    import { Info, SquareTerminal } from 'lucide-vue-next'

    const devDependencies = APP_DEPENDENCIES
</script>
