import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from 'src/components/Counter'

export const MainPage = memo(function MainPage() {
  return <div className="app">
    Hello APP
    <Counter />

    <div>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
})
