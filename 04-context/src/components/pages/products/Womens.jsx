import React from 'react'
import {Outlet} from 'react-router-dom'
import ProductGrid from './ProductGrid'
import { useData } from '../../context/DataContext'

const Womens = () => {
  const {womensProducts}=useData()
  return (
    <div className='bg-[#E5F6FF]  flex'>
      <ProductGrid data={womensProducts} />
      <Outlet />
    </div>
  )
}

export default Womens