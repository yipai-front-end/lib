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



### debounce

#### 函数说明

防抖函数

#### 入参

| 参数名称 | 参数类型                   | 是否必填 | 默认值 | 参数说明     |
| -------- | -------------------------- | -------- | ------ | ------------ |
| fn       | (...arg: any[]) => void | 是       |        | 待执行函数   |
| wait   | number                     | 是       |        | 等待触发时间(ms) |

#### 示例

```js
debounce(() => {
  console.log('防抖函数')
}, 500)
```



### throttle

#### 函数说明

节流函数

#### 入参

| 参数名称 | 参数类型                   | 是否必填 | 默认值 | 参数说明     |
| -------- | -------------------------- | -------- | ------ | ------------ |
| fn       | (...arg: any[]) => void | 是       |        | 待执行函数   |
|  delay  | number                    | 否       | 500 | 间隔触发时间（ms） |

### 示例

```js
throttle(() => {
  console.log('节流函数')
}, 500)
```





### deepClone 

#### 函数说明

对象深克隆（不支持对象中包含function）

#### 入参

| 参数名称 | 参数类型                   | 是否必填 | 默认值 | 参数说明     |
| -------- | -------------------------- | -------- | ------ | ------------ |
| *obj*  | T | 是       |        | 需要克隆的对象 |

### 示例

```js
let baseData = {
    name: '李四'，
    age:30
}
let deepData = deepClone(baseData)
// -> {name: '李四', age: 30}
```



### copyText

#### 函数说明

复制文本到粘贴板

#### 入参

| 参数名称 | 参数类型 | 是否必填 | 默认值 | 参数说明       |
| -------- | -------- | -------- | ------ | -------------- |
| **text** | string   | 是       |        | 需要复制的文本 |

### 示例

```js
copyText('需要复制的文本')
```



### random

#### 函数说明

根据参数（最大值 最小值）获取随机数

#### 入参
| 参数名称 | 参数类型 | 是否必填 | 默认值 | 参数说明 |
| -------- | -------- | -------- | ------ | -------- |
| *min*    | number   | 是       |        | 最小值   |
| *max*    | number   | 是       |        | 最大值   |

#### 示例

```js
let res = random(10,20)
// -> 13
```





### numberFun

#### 函数说明

格式化经过运算的数字，主要解决精度问题

#### 入参

| 参数名称 | 参数类型 | 是否必填 | 默认值 | 参数说明         |
| -------- | -------- | -------- | ------ | ---------------- |
| *price*  | number   | 是       |        | 未格式化前的数字 |
| *num*    | number   | 是       | 2      | 保留几位小数     |

#### 示例

```js
let res = numberFun(3.1415)
// -> 3.14
```



### formValidators

#### 函数说明

根据传入的对象以及校验规则匹配其合法性

 #### 入参

| 参数名称 | 参数类型               | 是否必填 | 默认值 | 参数说明             |
| -------- | ---------------------- | -------- | ------ | -------------------- |
| obj      | { [key: string]: any } | 是       |        | 需要验证的对象       |
| rules    | validatRules           | 是       |        | 验证规则             |
| deep     | boolean                | 否       | false  | 是否需要所有错误信息 |

  #### 校验规则

| 参数名称  | 参数类型                             | 是否必填 | 默认值 | 参数说明             |
| --------- | ------------------------------------ | -------- | ------ | -------------------- |
| message   | string                               | 是       |        | 未通过校验规则的提示 |
| required  | boolean                              | 否       |        | 当前字段是否必填     |
| pattern   | reg                                  | 否       |        | 当前字段正则校验规则 |
| validator | (value: any, key: string) => boolean | 否       |        | 自定义校验规则       |

#### 示例

```js
    let rules = {
      name: [{ message: '请输入姓名', required: true }],
      age: [{ message: '请输入年龄', pattern: /[0-9]+/ }],
      phone: [
        {
          message: '请输入手机号',
          validator: (value, key) => {
            let phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
            if (phoneReg.test(value)) {
              return true
            } else {
              return false
            }
          },
        },
      ],
    }
    // 成功示例
    let successData = {
      name: '李四',
      age: 30,
      phone: '15211111111',
    }
    let successRes = formValidators(successData, rules)
    // -> {status: true, message: '', messages: Array(0)}
    // 失败示例
    let failData = {
      name: '李四',
      age: 30,
      phone: '1521111111', // 手机号缺少一位
    }
    let failRes = formValidators(failData, rules)
    // -> {status: false, message: '请输入手机号', messages: Array(0)}
```



### pageScrollTo

#### 函数说明

 当前页面滚动到指定高度

 #### 入参

| 参数名称  | 参数类型 | 是否必填 | 默认值 | 参数说明     |
| --------- | -------- | -------- | ------ | ------------ |
| scrollTop | number   | 是       |        | 滚动高度     |
| behavior  | boolean  | 否       |        | 是否平滑滚动 |

#### 示例

```js
pageScrollTo({
    top: 1000,
    behavior: true
})
```



### getUrlQuery

#### 函数说明

获取传入的url的参数部分，并转化为对象

 #### 入参

| 参数名称 | 参数类型 | 是否必填 | 默认值 | 参数说明 |
| -------- | -------- | -------- | ------ | -------- |
| url      | string   | 是       |        | url链接  |

#### 示例

```js
let res = getUrlQuery('https://cjs123.591wsh.com/view/order/list?type=1&orderType=2')
// -> {type: '1', orderType: '2'}
```



### setUrlQuery

#### 函数说明

将对象转化为url参数

 #### 入参

| 参数名称 | 参数类型               | 是否必填 | 默认值 | 参数说明       |
| -------- | ---------------------- | -------- | ------ | -------------- |
| obj      | { [key: string]: any } | 是       |        | 需要转换的参数 |

#### 示例

```js
let res = setUrlQuery({
    type: 1,
    orderType: 2
})
// -> type=1&orderType=2
```



## 本地存储

setStorage 增加/更新缓存

getStorage 获取缓存

removeStorage 删除缓存

## 时间

parseTime 格式化时间

formatTimeArray  将一段时间戳转化为 [时,分,秒,天]

formatTime 获取语义化的间隔时间