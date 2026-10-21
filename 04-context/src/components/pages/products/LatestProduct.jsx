import React, { useEffect, useState } from 'react'
import { useData } from '../../context/DataContext'
import ProductGrid from './ProductGrid'
import Loading from '../../common/Loading'

const LatestProduct = () => {
  const {mensProducts, womensProducts, kidsProducts}= useData()
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 600)

    return ()=>clearTimeout(timer)
  }, [])

  if(loading){
    return <Loading text='Loading all data' />
  }
  
  const latest = [...mensProducts, ...womensProducts, ...kidsProducts]
  return (
    <div className='flex'>
      <ProductGrid data={latest} />
    </div>
  )
}

export default LatestProduct