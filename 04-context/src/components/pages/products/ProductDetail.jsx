import React from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import ProductGrid from './ProductGrid';

const ProductDetail = () => {
    const { id } = useParams();
    const { mensProducts, womensProducts, kidsProducts } = useData();

    

    const categories = [mensProducts, womensProducts, kidsProducts];
    const currentCategories = categories.find((category)=>{
        return category.some((item)=>item.prod_id.toString() === id)
    })

    const products = currentCategories?.find((item) => item.prod_id.toString() === id)

    const similarProducts = currentCategories 
        ? currentCategories.filter((item)=> item.prod_id.toString() !== id)
        : [];

    

    if (!products){
        return <div className='p-[30px] text-[50px] m-auto flex justify-center items-center'>Product Not Found</div>
    }
  return (
    <div>
        <div className='flex items-center justify-center font-sans m-[10px]'>
            <div className='h-[500px] w-[450px] overflow-hidden'>
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
        <div>
            <ProductGrid data={similarProducts} />
        </div>
    </div>
  )
}

export default ProductDetail