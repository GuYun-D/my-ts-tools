import { THump, ETump } from "../models"

/**
 * 将rgb格式转换成HEX格式
 * @param rgbaStr rgb(253, 183, 25)
 */
export const fromRgbToHEX = (rgbaStr: string) => {
  let HEXStr = '#'
  const hexArr: string[] = rgbaStr.replace('rgb(', '').replace(')', '').split(',')
  for (const rgbItem of hexArr) {
    HEXStr += parseInt(rgbItem).toString(16)
  }
  return HEXStr
}


/**
 * 大小驼峰互换
 * @param word 转换的单词
 */
export const fromHump = (word: string, type: THump) => {
  const wordArr = word.split(' ')
  let resultStr = ''
  switch (type) {
    case ETump.LARGE:
      for (const item of wordArr) {
        resultStr += (item[0].toLocaleUpperCase() + item.slice(1))
      }
      break

    case ETump.SMALL:
      for (let i = 0; i < wordArr.length; i++) {
        resultStr += i === 0 ? (wordArr[0][0].toLocaleLowerCase() + wordArr[0].slice(1)) : (wordArr[i][0].toLocaleUpperCase() + wordArr[i].slice(1))
      }
      break
  }
  return resultStr
}

/**
 * 获取范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 
 */
export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}