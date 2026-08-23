import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Work from './components/Work'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path='/skills' element={<Skills />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/experience" element={<Work/>} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

    </>
  )
}

export default App