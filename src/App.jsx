import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Nav/Navbar'
import Project from './Components/Project/Project'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Project />            
      <Contact />
      <Footer />
    </div>
  )
}

export default App