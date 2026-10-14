import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='bg-[#E5F6FF] '>
      <Outlet />
    </div>
  )
}

export default Product