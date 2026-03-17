import { defineStore } from 'pinia'

/**
 * 主配色
 * 色彩来源 https://ant-design.antgroup.com/docs/spec/colors-cn
 * 感谢 ant-design 项目😄
 */
export const colors = {
    '默认': '#18a058',
    '企业蓝': '#1677ff',
    '极客蓝': '#1d39c4',
    '法式洋红': '#c41d7f',
    '酱紫': '#531dab',
    '明青': '#08979c',
    '极光绿': '#389e0d',
    '日出': '#d4b106',
    '金盏花': '#d48806',
    '日暮': '#d46b08',
    '火山': '#d4380d',
    '薄暮': '#cf1322',
}

export const useStore = defineStore('ui', {
    state:()=>({
        color: colors[`默认`],   //主题色
        dark: false,            //启用暗黑模式
    }),
    actions: {
    },
    persist: true
})
