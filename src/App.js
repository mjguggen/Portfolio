import React from 'react';
import './App.scss';




import TitlePage from './Components/TitlePage';
import Projects from './Components/Projects';
import MyBackground from './Components/MyBackground'
import Certifications from './Components/Certifications'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'



/*
//const faderSlow = document.querySelectorAll(".fade-in-slow")
const fadeInLeft = document.querySelectorAll(".fade-in-left")
const fadeOutLeft = document.querySelectorAll(".fade-out-left")
const fadeInUp = document.querySelectorAll(".fade-in-up")
const fadeOutUp = document.querySelectorAll(".fade-out-up")
*/



class App extends React.Component {

  state = {
    hover: false,
    hoverDelay: false,
  }



/*
  skillHover = (event) => {
    const eventTarget = event.target
    const classList = 'classList' in eventTarget

    for(let i = 0; i < eventTarget.children.length; i++) {
      const child = eventTarget.children[i]
      if (classList) {
        child.classList.add('appear')
      }

      for (let i = 0; i < child.children.length; i++) {
        const child2 = child.children[i]
        if (classList) {
          child2.classList.add('appear')
        }
      } 
    }
  }

  skillHoverOut = (event) => {
    const eventTarget = event.target
    const classList = 'classList' in eventTarget

    for(let i = 0; i < eventTarget.children.length; i++) {
      const child = eventTarget.children[i]
      if (classList) {
        child.classList.remove('appear')
      } 

      for (let i = 0; i < child.children.length; i++) {
        const child2 = child.children[i]
        console.log(child2)
        if (classList) {
          child2.classList.remove('appear')
        }
      } 
    }
  }
*/


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
      rootMargin: "-200px"
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
          <Certifications />
          <Contact/>
          <Footer />
      </div>
    )
  }

}







export default App;