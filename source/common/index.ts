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
export function deepClone<T>(data: T): T {
  return JSON.parse(JSON.stringify(data))
}

/***
 *  复制文本的方法
 * @param text 要复制的文本内容
 */
export function copyText(text: string) {
  var input = document.createElement('input')
  /**
   * 现象：ios点击复制时屏幕下方会出现白屏抖动
   * 具体问题：输入框拉起键盘又瞬间收起
   * 解决：设置输入框为只读
   */
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', text)
  document.body.appendChild(input)
  /**
   * 现象：ios无法复制
   * 具体问题：由于 input.select() 在ios下并没有选中全部内容
   * 解决：input.setSelectionRange(0, 9999)选中所有内容
   */
  input.setSelectionRange(0, 9999)
  input.select() // 选择对象
  document.execCommand('Copy')
  document.body.removeChild(input)
}
