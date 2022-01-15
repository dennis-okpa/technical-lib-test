export const getDuration = (duration: number): string => {
  const hour = Math.floor(Math.ceil(duration) / 60)

  let minuteNum = Math.ceil(duration) % 60

  const minuteStr = minuteNum.toString()

  const minute = minuteStr.length < 2 ? '0' + minuteStr : minuteStr

  return `${hour}:${minute}`
}
