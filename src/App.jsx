import React from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import About from './Components/About'
import Skill from './Components/Skill'
import Services from './Components/Services'
import Project from './Components/Project'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Herosection/>
   <About/>
   <Skill/>
   <Services/>
   <Project/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   
   </>
  )
}

export default App