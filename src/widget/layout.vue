<template>
    <n-layout class="w-full h-full" position="absolute">
        <n-layout-header :style="{ height }" :bordered="headerBorder">
            <slot name="header">
                <div class="p-2">
                    <n-page-header :subtitle @back="handleBack">
                        <template #title>
                            <n-space size="small">
                                <div v-if="icon" style="padding-top: 3px;">
                                    <n-icon :component="icon"/>
                                </div>
                            {{title}}
                            </n-space>
                        </template>
                    </n-page-header>
                </div>
            </slot>
        </n-layout-header>
        <n-layout-content position="absolute" :content-style="{ padding }"
            :style="{ top: height, bottom: '0px'}">
            <slot />
        </n-layout-content>
    </n-layout>
</template>

<script setup>
    const router = useRouter()
    
    const props = defineProps({
        headerBorder: {type:Boolean, default: true},
        headerBack: {type:Boolean, default: true},
        height: {type:String, default: '43px' },
        title: {type:String, default: '页面标题'},
        subtitle: {type:String, default: null},
        icon: {type:Object, default: null},
        padding:{type:String, default: '10px'}
    })

    const handleBack = props.headerBack ? () => router.back() : null
</script>