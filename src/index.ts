export function showLog(message: string): boolean {
  console.log('Hey!')
  console.log(message)

  return true
}

showLog('string props from ts file')
