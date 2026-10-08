import React from 'react'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from './components/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Secondarynav from './components/navbar/Secondarynav'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/contect' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App