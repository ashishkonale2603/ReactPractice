import React from 'react'
import { useData } from '../../context/DataContext'
import ProductGrid from './ProductGrid'

const LatestProduct = () => {
  const {mensProducts, womensProducts, kidsProducts}= useData()
  
  const latest = [...mensProducts, ...womensProducts, ...kidsProducts]
  return (
    <div className='flex'>
      <ProductGrid data={latest} />
    </div>
  )
}

export default LatestProduct