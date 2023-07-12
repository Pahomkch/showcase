import {memo} from 'react'
import {useTranslation} from 'react-i18next'

const AboutPage = memo(function AboutPage() {
  const {t} = useTranslation('about')

  return (
    <div className="app">
      {t(
        "My name is Andrew, I'm creating project where I can used all technologies what I interested or passion",
      )}
    </div>
  )
})

export default AboutPage
