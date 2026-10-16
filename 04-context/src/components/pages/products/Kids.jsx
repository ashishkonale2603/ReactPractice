import React from 'react'
import {Outlet} from 'react-router-dom'
import ProductGrid from './ProductGrid'
import { useData } from '../../context/DataContext'

const Kids = () => {
  const {kidsProducts} = useData()

  return (
    <div className='bg-[#E5F6FF]  flex'>
      <ProductGrid data={kidsProducts} />
      <Outlet />
    </div>
  )
}

export default Kids