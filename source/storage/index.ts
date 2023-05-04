/**
 * 设置缓存值
 */
export function setStorage(key: string, value: any): void {
  if (!key) throw new Error('请传入正确的缓存键')
  if (value === undefined) throw new Error('请传入缓存值')

  const type = typeof value
  const data = type === 'string' ? value : JSON.stringify({ type, value })

  localStorage.setItem(key, data)
}

/**
 * 获取缓存数据
 */
export function getStorage(key: string) {
  if (!key) throw new Error('请传入正确的缓存键')

  let typeOrigin = localStorage.getItem(key) || ''
  if (typeOrigin === '') return ''
  try {
    let data = JSON.parse(typeOrigin)

    // 没有type 则判断为字符串类型
    if (data.type === 'undefined') return typeOrigin
    // NaN 类型存储时会变成null
    if (data.type === 'number' && data.value == null) return NaN

    return data.value
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
