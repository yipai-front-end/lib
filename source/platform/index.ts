/**
 * 获取当前设备系统类型
 */
export function getSystemPlatform() {
  if (/(Android)/i.test(navigator.userAgent)) {
    return 1
  } else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return 2
  } else {
    return 3
  }
}

/**
 * 获取浏览器环境
 * 3 浏览器 5 公众号
 */
export function getwebPlatform() {
  let ua = navigator.userAgent.toLowerCase()
  let webPlatform: 3 | 5 = /MicroMessenger/i.test(ua) ? 5 : 3
  return webPlatform
}

/**
 * 谷歌官方推荐的检测是否支持webp的方法
 */
export function checkWebpFeature() {
  return new Promise((resolve, reject) => {
    var img = new Image()
    img.onload = () => {
      var result = img.width > 0 && img.height > 0
      if (result) {
        resolve(true)
      } else {
        reject(false)
      }
    }
    img.onerror = () => {
      reject(false)
    }
    img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=='
  })
}
