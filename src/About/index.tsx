import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from 'src/components/Counter'

export const AboutPage = memo(function AboutPage() {
  return <div className="app">
    About APP
    <Counter />

    <div>
      <Link to="/">Main</Link>
    </div>
  </div>
})
