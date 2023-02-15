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
 * @param fu 执行函数
 * @param wait 延迟触发的时间
 * @returns
 */
export function debounce(fn, wait) {
  let timer = null
  return function () {
    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

/**
 * 节流
 * @param fn 执行函数
 * @param delay 延时ms
 */
export function throttle(fn, delay = 500) {
  let timer = null
  return function () {
    if (timer) return
    fn.apply(this, arguments)
    timer = setTimeout(() => {
      timer = null
    }, delay)
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
