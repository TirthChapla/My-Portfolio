import styles from "./app.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/hero"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Project } from "./components/Projects/project"
import { Contact } from "./components/Contact/Contact"


function App() {
  
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App
