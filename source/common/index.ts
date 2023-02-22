/**
 * 对象键全部转小写
 * @param obj 对象
 * @returns
 */
export function toLowerCase(obj: any) {
  let toobj: any = {}
  for (const key in obj) {
    toobj[key.toLowerCase()] = obj[key]
  }
  return toobj
}

/**
 * 防抖
 * @param fu 执行函数
 * @param wait 延迟触发的时间
 * @returns
 */
export function debounce(fn: (...arg: any[]) => void, wait: number) {
  let timer: null | NodeJS.Timeout = null
  return function (this: any, ...args: any[]) {
    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args as []), wait)
  }
}

/**
 * 节流
 * @param fn 执行函数
 * @param delay 延时ms
 */
export function throttle(fn: (...arg: any[]) => void, delay = 500) {
  let timer: null | NodeJS.Timeout = null
  return function (this: any, ...args: any[]) {
    if (timer) return
    fn.apply(this, args as [])
    timer = setTimeout(() => (timer = null), delay)
  }
}

/**
 * 深克隆
 * @param data
 * @returns
 */
export function deepClone(data: any) {
  return JSON.parse(JSON.stringify(data))
}
