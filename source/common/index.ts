/**
 * 对象键全部转小写
 * @param obj 对象
 * @returns
 */
export function toLowerCase(obj: { [key: string]: any }) {
  let toObj: any = {}
  for (const key in obj) {
    toObj[key.toLowerCase()] = obj[key]
  }
  return toObj
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
 * 对象深克隆
 * 兼容key是undefined的情况
 * 兼容时间对象
 * 循环引用问题，暂时没遇到所有暂时不解决
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  let cloneObj: any = Array.isArray(obj) ? [] : {}
  Object.entries(obj).map(([key, value]) => {
    if (obj.hasOwnProperty(key)) {
      if (value instanceof Date) {
        cloneObj[key] = new Date(value)
      } else {
        cloneObj[key] = deepClone(value)
      }
    }
  })
  return cloneObj
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

/**
 * 根据最大值和最小值获取随机数
 * @returns
 */
export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}

/*
 * 格式化数字
 * @param price 未格式化文字
 * @param  num 保留几位小数
 */
export function numberFun(price: number, num = 2) {
  if (price > 0) {
    if (String(price).includes('.')) {
      return Number(price.toFixed(num))
    } else {
      return price
    }
  } else {
    return price
  }
}

type formValidatorsErrorMsgType = { key: string; message: string }
type formValidatorsResultType = {
  status: boolean
  message: string
  messages: formValidatorsErrorMsgType[]
}
export type validatRules = {
  [key: string]: {
    message: string
    required?: boolean
    pattern?: RegExp
    validator?: (value: any, key: string) => boolean
  }[]
}
/**
 * 根据传入的规则校验对象是否合法
 * @param obj
 * @param rules
 * @param deep 是否需要所有错误信息
 */
export function formValidators(
  obj: { [key: string]: any },
  rules: validatRules,
  deep: boolean = false
): formValidatorsResultType {
  // 只要一个结果还是需要全部结果？
  // 返回所有有问题的校验结果
  let errorMsg: formValidatorsErrorMsgType[] = []

  function addErrorMsg(key: string, msg: string) {
    errorMsg.push({ key, message: msg })
  }
  // 遍历规则
  let rulesList = Object.entries(rules)
  for (let i = 0; i < rulesList.length; i++) {
    const [key, itemRules] = rulesList[i]
    let verifyItem = obj[key]
    for (let j = 0; j < itemRules.length; j++) {
      const rule = itemRules[j]
      let ruleResult = true
      if (rule.required) {
        // 校验是否必填
        ruleResult = !(verifyItem == undefined || verifyItem == null || verifyItem == '')
      } else if (rule.pattern) {
        // 校验正则是否合法
        ruleResult = rule.pattern.test(verifyItem)
      } else if (rule.validator) {
        // 校验自定义函数
        ruleResult = rule.validator(verifyItem, key)
      }
      if (!ruleResult) {
        addErrorMsg(key, rule.message)
        break
      }
    }
    if (!deep && errorMsg.length != 0) {
      break
    }
  }
  let res: formValidatorsResultType = {
    status: errorMsg.length == 0,
    message: !deep && errorMsg.length != 0 ? errorMsg[0].message : '',
    messages: deep ? errorMsg : [],
  }
  return res
}

type pageScrollToType = {
  /**
   * 滚动高度
   */
  scrollTop: number
  /**
   * 是否滚动
   */
  behavior?: boolean
}

/**
 * 页面滚动到指定高度
 */
export function pageScrollTo(params: pageScrollToType) {
  // 获取当前滚动高度
  window.scrollTo({
    top: params.scrollTop,
    behavior: (params.behavior ? 'smooth' : 'instant') as any,
  })
}

/**
 * 获取传入的url的参数部分，并转化为对象
 */
export function getUrlQuery(url: string) {
  const query = url.split('?')[1]
  if (query) {
    const queryArr = query.split('&')
    const queryObj: any = {}
    queryArr.forEach((item) => {
      const arr = item.split('=')
      queryObj[arr[0]] = arr[1]
    })
    return queryObj
  } else {
    return {}
  }
}

/**
 * 将对象转化为url上面的参数
 */
export function setUrlQuery(obj: { [key: string]: any }) {
  let queryString = Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&')
  return queryString
}
