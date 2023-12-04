# yipai-lib工具库

## 通用

### toLowerCase 

#### 函数说明

对象键转小写

#### 入参

| 参数名称 | 参数类型 | 是否必填 | 默认值 | 参数说明   |
| -------- | -------- | -------- | ------ | ---------- |
| obj      | object   | 是       |        | 待转换对象 |

#### 示例

```js
let res = toLowerCase({ SESSION: xxxx, Sum: xxxx })
// => { session: xxxx, sum: xxxx }
```



debounce 防抖函数

throttle 节流函数

deepClone 对象深克隆（不支持对象中包含function）

copyText 复制文本到粘贴板

random 根据参数（最大值 最小值）获取随机数

numberFun 格式化经过运算的数字，主要解决精度问题

formValidators 根据传入的对象以及校验规则匹配其合法性

pageScrollTo 当前页面滚动到指定高度

getUrlQuery 获取传入的url的参数部分，并转化为对象

setUrlQuery 将对象转化为url参数

## 本地存储

setStorage 增加/更新缓存

getStorage 获取缓存

removeStorage 删除缓存

## 时间

parseTime 格式化时间

formatTimeArray  将一段时间戳转化为 [时,分,秒,天]

formatTime 获取语义化的间隔时间