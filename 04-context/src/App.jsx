import React from 'react'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from './components/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Mens from './components/pages/products/Mens'
import Womens from './components/pages/products/Womens'
import Kids from './components/pages/products/Kids'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Product />}>
          <Route path='mens' element={<Mens />}></Route>
          <Route path='womens' element={<Womens />}></Route>
          <Route path='kids' element={<Kids />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App