/**
 * object键全部转小写
 * @param obj 待处理对象
 */
export declare function toLowerCase(obj: { [k: string]: any }): {
  [k: string]: any
}

/**
 * @param func 方法
 * @param wait 防抖时间
 */
export declare function debounce(func: Function, wait: number): () => void

/**
 * @param func 方法
 * @param wait 节流时间
 */
export declare function throttle(func: Function, wait: number): () => void

/**
 * 为兼容mp项目添加的防抖
 * @param func 方法
 * @param wait 防抖时间
 */
export declare function _debounce(func: Function, wait: number): () => void

/**
 * 为兼容mp项目添加的节流
 * @param func 方法
 * @param wait 节流时间
 */
export declare function _throttle(func: Function, wait: number): () => void

/**
 * 深度克隆
 * @param data 克隆对象
 */
export declare function deepClone(data: object): object

/**
 * 将一个未来时间戳转化为[时 分 秒 天]
 * @param duration 未来时间戳
 */
export declare function formatTimeArray(duration: number): Array<string>

/**
 * 格式化时间格式
 * @param time 时间戳
 * @param format 时间格式
 * @param isZero 10以下是否补零
 */
export declare function parseTime(
  time: number,
  format?: string,
  isZero?: boolean
): string

/**
 * 获取语义化的间隔时间
 * @param time 过去的时间
 * @returns
 */
export declare function formatTime(time: number): string
