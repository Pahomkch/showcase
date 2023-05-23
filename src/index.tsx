import { render } from "react-dom"
import {Counter} from './components/Counter/index'

export function showLog(message: string): boolean {
  console.log('Hey!')
  console.log(message)

  return true
}

showLog('string props from ts file')


render(<Counter />, document.getElementById('root'));
