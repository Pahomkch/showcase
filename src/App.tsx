import {memo} from 'react'
import { Counter } from './components/Counter'
import './globalStyle.scss'

export const App = memo(function App() {
  return <div className="app">
    Hello APP
    <Counter />
  </div>
})
