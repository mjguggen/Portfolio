import React from 'react';
import './App.scss';




import TitlePage from './Components/TitlePage';
import Projects from './Components/Projects';
import MyBackground from './Components/MyBackground'
import Certifications from './Components/Certifications'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Skills from './Components/Skills'




class App extends React.Component {

  componentDidMount() {
    //Title Button Color Fade
    const titleSection = document.querySelector('#title-page')

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-10%"
    };

    const contactButtonObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          document.getElementById('contact-label').className = 'contact-label'
        } else {
          document.getElementById('contact-label').className = 'contact-label-scroll'
        }

        if (entry.isIntersecting) {
          document.getElementById('navbar').className = 'navbar'
        } else {
          document.getElementById('navbar').className = 'navbar-scroll'
        }

      })

    }, options)
    
    contactButtonObserver.observe(titleSection)


    //Content Fader
    const faders = document.querySelectorAll(".fade-in")
    const faderSlow = document.querySelectorAll(".fade-in-slow")
    const faderUp = document.querySelectorAll(".fade-in-up")
    const fadeOptions = {
      root: null,
      threshold: 0,
      rootMargin: "-100px"
    }

    const scrollFade = new IntersectionObserver(function(entries, scrollFade){
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear')
          scrollFade.unobserve(entry.target)
        }
      })
    }, fadeOptions)


    faders.forEach(fader => {
      scrollFade.observe(fader)
    });

    faderSlow.forEach(fader => {
      scrollFade.observe(fader)
    });

    faderUp.forEach(fader => {
      scrollFade.observe(fader)
    });
  }




  render () {
    return (
      <div id="App" className="App">
          <Navbar />
          <TitlePage />
          <MyBackground />
          <Projects />
          <Skills/>
          <Certifications />
          <Contact/>
      </div>
    )
  }

}







export default App;