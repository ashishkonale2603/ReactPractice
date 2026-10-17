import React from 'react'
import {Outlet} from 'react-router-dom'
import ProductGrid from './ProductGrid'
import { useData } from '../../context/DataContext'

const Mens = () => {
  const { mensProducts } = useData();
  
  return (
    <div className='bg-[#E5F6FF]  flex'>
      <ProductGrid data={mensProducts} />
    </div>
  )
}

export default Mens