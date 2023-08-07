type formatData = {
  y: number
  m: number
  d: number
  h: number
  i: number
  s: number
  a: number
}
type formatKey = 'y' | 'm' | 'd' | 'h' | 'i' | 's' | 'a'

/**
 * 格式化time
 */
export function parseTime(time: number, format: string = '{y}-{m}-{d} {h}:{i}:{s}', isZero = true) {
  let date = new Date(time)
  const formatObj: formatData = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key: formatKey) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10 && isZero) {
      return '0' + value
    } else {
      return value + ''
    }
  })
  return time_str
}

/**
 * 将一个未来时间戳转化为[时 分 秒 天]
 */
export function formatTimeArray(duration: number) {
  if (duration <= 0) {
    return ['00', '00', '00', '00']
  }
  let days = Math.floor(duration / (1000 * 60 * 60 * 24)) + ''
  let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ''
  let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60)) + ''
  let seconds = Math.floor((duration % (1000 * 60)) / 1000) + ''
  return [hours.padStart(2, '0'), minutes.padStart(2, '0'), seconds.padStart(2, '0'), days + '']
}

/**
 * 获取语义化的间隔时间
 * @param time 过去的时间
 * @returns
 */
export function formatTime(time: number) {
  const now = Date.now()
  const diff = (now - time) / 1000
  if (diff < 60) {
    return Math.ceil(diff) + '秒'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时'
  } else {
    return `${Math.floor(diff / (3600 * 24))}天`
  }
}
