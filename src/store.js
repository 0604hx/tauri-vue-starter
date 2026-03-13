import { defineStore } from 'pinia'

export const useStore = defineStore('ui', {
    state:()=>({
        dark: false,        //启用暗黑模式
    }),
    actions: {
    },
    persist: true
})
