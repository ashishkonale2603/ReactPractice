import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='h-[120px] w-full bg-amber-600 text-2xl flex items-center justify-between'>
        <img className='h-[100px] object-cover' src={logo} alt="logo" />

        <div className='w-[60%] h-full flex items-center justify-around'>
            <h2 className='w-[20%] h-full flex items-center justify-center'>Home</h2>
            <h2 className='w-[20%] h-full flex items-center justify-center'>Product</h2>
            <h2 className='w-[20%] h-full flex items-center justify-center'>Service</h2>
            <h2 className='w-[20%] h-full flex items-center justify-center'>Contact</h2>
            <h2 className='w-[20%] h-full flex items-center justify-center'>About</h2>
        </div>
    </div>
  )
}

export default Navbar