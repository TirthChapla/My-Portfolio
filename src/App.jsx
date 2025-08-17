import styles from "./App.module.css"

import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Project } from "./components/Projects/Project"
import { Contact } from "./components/Contact/Contact"
import { Achievement } from "./components/Achievement/Achievement"
import Github from "./components/Github/Github"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"
import LeetCodeStats from "./components/LeetCode/LeetCodeStats"

function App() {
  
  return (
    <div className={styles.App}>
      <Navbar active="home"/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience />
      <Project />
      <Achievement />
      <Github />
      <LeetCodeStats username="tirthchapla" />
      <Contact />
    </div>
  )
}

export default App
