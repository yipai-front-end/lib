export function toLowerCase(obj) {
  let toobj = {}
  for (const key in obj) {
    toobj[key.toLowerCase()] = obj[key]
  }
  return toobj
}

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
