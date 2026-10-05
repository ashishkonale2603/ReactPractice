import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'
import About from './components/About'
import {Routes, Route} from 'react-router-dom'
import PageTitle from './components/PageTitle'

const App = () => {
  return (
    <div>
      <Navbar />
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </div>
  )
}

export default App