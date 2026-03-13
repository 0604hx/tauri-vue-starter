import { NTag } from "naive-ui"
import { h } from "vue"

/**
 * 构建完成程度
 * @param {Object} row 
 */
export const buildState = row=>{
    let done = row.items.filter(v=>v.done==true).length
    let v = done/row.items.length*100

    return h(NTag, { size: 'small', bordered: false, type: v>=100?'success':'primary' }, `${v.toFixed(0)}%`)
}