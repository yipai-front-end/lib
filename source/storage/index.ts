/**
 * 设置缓存值
 */
export function setStorage(key: string, value: any): void {
  if (!key) {
    new Error('请传入缓存键')
  }
  if (!value) {
    new Error('请传入缓存值')
  }
  const type = typeof value
  const data = JSON.stringify({ type, value })
  localStorage.setItem(key, data)
}

/**
 * 获取缓存数据
 */
export function getStorage(key: string) {
  if (!key) {
    return new Error('请传入缓存键')
  }

  let typeOrigin = localStorage.getItem(key) || ''
  try {
    let data = JSON.parse(typeOrigin)
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
  if (!key) {
    new Error('请传入缓存键')
  }
  localStorage.removeItem(key)
}
