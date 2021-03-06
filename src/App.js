import { useEffect } from 'react';
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Education from './components/Education/Education';
import Experiences from './components/Experiences/Experiences';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Hire from './components/Hire/Hire';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Notification from './components/Notification/Notification';
import Connect from './components/Connect/Connect';

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const containers = gsap.utils.toArray(".App > *:nth-child(n+5):nth-last-child(n+2)")
    containers.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: Power2.easeInOut
      })
    })

  }, [])

  return (
    <div className="App">
      <Notification />
      <Nav />
      <Connect />
      <Hero />
      <Projects />
      <Skills />
      <Experiences />
      <Education />
      <Hire />
      <Footer />
    </div>
  );
}

export default App;
