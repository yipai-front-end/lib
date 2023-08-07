/**
 * 兼容老版本的特殊方法
 */

let timeout: null | NodeJS.Timeout = null
let _throttleRunning = false
/**
 * 去抖函数封装体
 * @param {Fun} fn 执行函数
 * @param {Number} wait 触发时间
 */
export function _debounce(fn: () => void, wait: number) {
  if (timeout !== null) clearTimeout(timeout)
  timeout = setTimeout(fn, wait)
}
/**
 * 节流
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms
 */
export const _throttle = (fn: () => void, delay = 500) => {
  if (_throttleRunning) {
    return
  }
  _throttleRunning = true
  fn()
  setTimeout(() => {
    _throttleRunning = false
  }, delay)
}
