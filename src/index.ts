import { debounce } from '../source/index'

debounce(function (value1, value2) {
  console.log(value1, value2, '11111111')
}, 11)(111, 222)
