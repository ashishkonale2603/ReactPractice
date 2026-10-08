import React from 'react'
import { Link } from 'react-router-dom'

const Mainnav = () => {
  return (
    <div className='h-30 bg-[#A4DDED] flex w-full justify-between'>
      <div className='w-160 font-bold text-5xl items-center flex justify-center'>
        <h1>Spadewood</h1>
      </div>

      <div className='h-full w-full flex flex-col'>
        <div className='h-2/5 flex w-full float-right'>
          <div></div>
        </div>
        <div className='h-3/5 flex gap-10 float-right items-center justify-end mx-15'>
          <Link className='px-8 border-1 text-2xl rounded-4xl py-2' to='/'>Home</Link>
          <Link className='px-8 border-1 text-2xl rounded-4xl py-2' to='/product'>Product</Link>
          <Link className='px-8 border-1 text-2xl rounded-4xl py-2' to='/contact'>Contact</Link>
          <Link className='px-8 border-1 text-2xl rounded-4xl py-2' to='/about'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Mainnav