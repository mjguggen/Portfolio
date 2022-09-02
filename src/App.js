import React, {useEffect, useState} from 'react'
import Header from './sections/Header'
import Nav from './components/Nav'
import Work from './sections/Work'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import './App.scss';

const App = () => {
  function getWindowDimensions() {


    const { outerWidth: width, outerHeight: height } = window;

    return {
      width,
      height
    };
  } 

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
    });

    return () => {
      document.removeEventListener('gesturestart', function (e) {
        e.preventDefault();
      })
    }
  }, [])


  //Scroll Fader
  const fadeOptions = {
    root: null,
    threshold: [0, .1, .15, .2, .9, 1],
    rootMargin: "5%"
  }

  const headerScrollFade = (entry) => {
    if (entry.intersectionRatio > .9) {
      entry.target.style.opacity = 1
      entry.target.style.transform = 'translate(0px, 0px)'

      return
    } else {
      entry.target.style.opacity = 0
      entry.target.style.transform = 'translate(0px, -50px)'

      return
    }
  }

  const createScrollFaders = () => {
    const scrollFader = new IntersectionObserver(
      (entries, scrollFade) => {
        entries.forEach(entry => {
          if (entry.target.id === 'header_box') {
            headerScrollFade(entry)
          }
      })
    }, fadeOptions)

    scrollFader.observe(document.getElementById('header_box'))
    scrollFader.observe(document.getElementById('blob-wrapper'))
  }

  useEffect(() => {
    return createScrollFaders()
  }, [])


  
  return (
    <div className="App">
      
      <Nav/>
      <Header
        width={windowDimensions.width}
        height={windowDimensions.height}
      />

      <div className="section-wrapper">
        <Work/>
        <Skills/>
        <Projects/>
      </div>

      <Contact
        width={windowDimensions.width}
        height={windowDimensions.height}
      />
    </div>
  );
}

export default App;
