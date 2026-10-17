import React from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../context/DataContext'

const ProductDetail = () => {
    const { id } = useParams()
    const { mensProducts, womensProducts, kidsProducts } = useData()

    const allProducts = [...mensProducts, ...womensProducts, ...kidsProducts]
    const products = allProducts.find((p)=>p.prod_id.toString() === id)

    if (!products){
        return <div className='p-[30px] text-[30px] m-auto'>Product Not Found</div>
    }
  return (
    <div className='min-w-[500px] min-h-[600px] flex items-center justify-center'>
        <div className='h-[500] w-[400px] overflow-hidden rounded-2xl'>
            <img className='h-full w-full object-cover' src={products.prod_image} alt={products.prod_name} />
        </div>
    </div>
  )
}

export default ProductDetail