import React from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../context/DataContext'

const ProductDetail = () => {
    const { id } = useParams()
    const { mensProducts, womensProducts, kidsProducts } = useData()

    const allProducts = [...mensProducts, ...womensProducts, ...kidsProducts]
    const products = allProducts.find((p)=>p.prod_id.toString() === id)

    if (!products){
        return <div className='p-[30px] text-[50px] m-auto flex justify-center items-center'>Product Not Found</div>
    }
  return (
    <div className='min-w-[800px] min-h-[600px] flex items-center justify-center font-sans m-[10px]'>
        <div className='h-[500px] w-[450px] overflow-hidden bg-amber-600'>
            <img className='h-full w-full object-cover' src={products.prod_image} alt={products.prod_name} />
        </div>
        <div className='h-[500px] w-[600px] bg-amber-300 flex flex-col p-[30px]'>
            <div className='text-[35px] font-semibold'>
                {products.prod_name}
            </div>
            <div className='text-[25px]'>
                {products.prod_brand}
            </div>
            <div className='w-[350px] py-[10px] font-[35px]'>
                Available Sizes:
                {products.prod_size.map((item,index)=>{
                    return (
                        <div key={index} className='w-[100px] h-[30px] flex items-center m-[10px] bg-amber-200 justify-center rounded-2xl'>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductDetail