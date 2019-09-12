export default {
  /**
   * 时间格式化
   */
  datetime (value, format) {
    if (!value) return ''
    return (new window.Date(parseInt(value))).Format(format || 'yyyy-MM-dd hh:mm')
  },
  dateTimeSecond (value, format) {
    if (!value) return ''
    return (new window.Date(parseInt(value))).Format(format || 'yyyy-MM-dd hh:mm:ss')
  },
  logDatetime (value, format) {
    if (!value) return ''
    return (new window.Date(parseInt(value))).Format(format || 'yyyy/MM/dd hh:mm:ss')
  },
  /**
   * 时间格式化，只显示月日
   */
  daytime (value, format) {
    if (!value) return ''
    return (new Date(parseInt(value))).Format(format || 'MM-dd')
  },

  /**
   * 时间格式化，只显示年月日
   */
  day (value, format) {
    if (!value) return ''
    return (new Date(parseInt(value))).Format(format || 'yyyy-MM-dd')
  },

  /**
   * 时间格式化，只显示年月
   */
  dayFormat (value, format) {
    if (!value) return ''
    return (new Date(parseInt(value))).Format(format || 'yyyy年MM月')
  },

  /**
   * 小数转百分比
   */
  percentage (num) {
    num = +num
    const numArr = num.toString().split('.')
    let result
    if (numArr.length === 2) {
      result = parseInt(numArr.join('').replace(/^0+/, '')) * 100 / Math.pow(10, numArr[1].length)
    } else {
      result = num * 100
    }
    return num >= 0 ? result + '%' : ''
  },
  /**
   * 时间格式化到秒
   */
  secondtime (value, format) {
    if (!value) {
      return ''
    }
    return (new window.Date(parseInt(value))).Format(format || 'yyyy-MM-dd hh:mm:ss')
  }
}
