/**
 * 对象键全部转小写
 * @param obj 对象
 * @returns
 */
export function toLowerCase(obj) {
  let toobj = {}
  for (const key in obj) {
    toobj[key.toLowerCase()] = obj[key]
  }
  return toobj
}

/**
 * 防抖
 * @param func 实际想要执行逻辑
 * @param wait 延迟触发的时间
 * @returns
 */
export function debounce(func, wait) {
  let timer = null
  return () => {
    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(func, wait)
  }
}

/**
 * 深克隆
 * @param data
 * @returns
 */
export function deepClone(data) {
  return JSON.parse(JSON.stringify(data))
}
