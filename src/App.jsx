import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { SocialLinks } from './components/SocialLinks'
import { MyProjects } from './components/MyProjects'
import { Experience } from './components/Experience'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Contact } from './components/Contact'


function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme : dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const { i18n } = useTranslation()
  const changeEnglish = () => { i18n.changeLanguage("en") }
  const changeSpanish = () => { i18n.changeLanguage("es") }

  return (
    <>
      <div>
        <NavBar handleSwitch={handleSwitch} theme={theme} changeEnglish={changeEnglish} changeSpanish={changeSpanish} />
        <Home />

        <MyProjects />

        <Experience />

        <Contact />

        <SocialLinks />
      </div>
    </>
  )
}

export default App
