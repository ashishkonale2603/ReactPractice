import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className='h-2/10 w-full bg-cyan-400 font-bold font-serif flex justify-between items-center'>
        <div className='w-fit text-3xl'>
            <h2>Konale's</h2>
        </div>
        <div className='w-fit gap-x-25 flex m-5'>
          <Link to='/'>Home</Link>
          <Link to='/product'>Product</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Navbar