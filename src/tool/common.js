import dayjs from "dayjs"

export const globalName = "doc-name"

const COLORS = {"INFO":"#2080f0", "DEBUG":"#8c0776", "ERROR":"#d03050"}
/**
 *
 * @param {String} level
 * @param  {...any} ps
 * @returns
 */
const log = (level, group, color, ...ps)=> console.debug(
    `%c${dayjs(new Date).format("HH:mm:ss")} ${level}${group?` %c${group}`:"%c"}`,
    `color:${COLORS[level]};font-weight:500;`,
    `background:${color};padding:0 2px 0px 2px;color:white`,
    ...ps
)

export class LogFactory {
    /**@type {String} */
    prefix
    /**@type {String} */
    color

    constructor(groupName, color){
        this.prefix = groupName
        this.color = color || "#8c0776"
    }

    info (...ps){
        log("INFO", this.prefix, this.color, ...ps)
    }
    debug (...ps){
        log("DEBUG", this.prefix, this.color, ...ps)
    }
    error (...ps){
        log("ERROR", this.prefix, this.color, ...ps)
    }
}

const defaultLogger = new LogFactory()

export const logger = {
    new     : (group, color)=> {
        if(!group)  throw `Log 分组名称不能为空`
        return new LogFactory(group, color)
    },
    info    : defaultLogger.info,
    debug   : defaultLogger.debug,
    error   : defaultLogger.error
}
