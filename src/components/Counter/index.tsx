import {memo, useState} from 'react'
import  './style.scss'

export const Counter = memo(function Counter(props: {className?: string}) {
  const [count, setCount] = useState(0)
  return <div className="grid">
    <h1>{count}</h1>
    <button className="button" onClick={() => setCount(state => state + 1)}>+</button>
    <button className="button" onClick={() => setCount(state => state - 1)}>-</button>
  </div>
})
