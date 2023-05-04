/**
 * 设置缓存值
 */
export function setStorage(key: string, value: any): void {
  if (!key) throw new Error('请传入缓存键')
  if (value === undefined || value === null) throw new Error('请传入正确的缓存值')

  const type = typeof value
  const data = type === 'string' ? value : JSON.stringify({ type, value })

  localStorage.setItem(key, data)
}

/**
 * 获取缓存数据
 */
export function getStorage(key: string) {
  if (!key) throw new Error('请传入缓存键')

  let typeOrigin = localStorage.getItem(key) || ''
  if (typeOrigin === '') return ''
  try {
    let data = JSON.parse(typeOrigin)
    if (typeof data === 'object') {
      return data.value
    } else {
      return String(data)
    }
  } catch (error) {
    return typeOrigin
  }
}

/**
 * 删除缓存数据
 * @param key
 * @returns
 */
export function removeStorage(key: string): void {
  if (!key) throw new Error('请传入缓存键')
  localStorage.removeItem(key)
}
