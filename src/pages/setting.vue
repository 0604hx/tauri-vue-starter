<template>
    <Layout title="设置">
        <n-card size="small" title="修改后自动保存">
            <n-form label-placement="left" label-width="120px">
                <n-form-item label="启用暗黑模式">
                    <n-switch v-model:value="store.dark" />
                </n-form-item>
            </n-form>
        </n-card>
    </Layout>
</template>

<script setup>
    import { useStore } from '@/store'

    const store = useStore()
</script>