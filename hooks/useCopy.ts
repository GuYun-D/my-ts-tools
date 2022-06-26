/**
 * 实现浏览器的复制功能
 * @param text 要复制的文本
 * @param success 复制成功的回调
 */
export const useCopy = (text: string, success?: () => void) => {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  success && success()
}