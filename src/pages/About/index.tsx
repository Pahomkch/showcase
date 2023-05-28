import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from 'components/Counter'

const AboutPage = memo(function AboutPage() {
  return <div className="app">
    About APP
    <Counter />

    <div>
      <Link to="/">Main</Link>
    </div>
  </div>
})

export default AboutPage
