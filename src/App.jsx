import styles from "./App.module.css";
import {NavBar} from "./componets/navbar/NavBar" ;
import {Hero} from "./componets/hero/Hero";
import {About} from "./componets/about/About";
import {Skills} from "./componets/skills/Skills";
import {Projects} from './componets/project/Projects'
import {Contact} from './componets/contact/Contact'


function App() {
  return (
    <>
      <div className={styles.App}>
        <NavBar />
        <Hero/>
        <About />
        <Skills />
        <Projects />
        <Contact />
        
      </div>
    </>
  );
}

export default App;
