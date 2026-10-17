import React from 'react'
import { Outlet } from 'react-router-dom'
import LatestProduct from './products/LatestProduct'

const Product = () => {
  return (
    <div className='bg-[#E5F6FF] '>
      <LatestProduct />
      <Outlet />
    </div>
  )
}

export default Product