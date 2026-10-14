import React from 'react'

const ProductGrid = (props) => {
  return (
    <div className='font-serif my-[28px] gap-[50px] w-full flex flex-wrap bg-[#A4DDED] justify-center'>
        {props.data.map((item,index) => (
            <div key={index} className='h-[400px] w-[320px] bg-[#E5F6FF] my-[20px] rounded-2xl overflow-hidden border-[2px] border-blue-500'>
              <div className='h-[300px] flex '>
                <img className='h-full w-full object-cover' src={item.prod_image} alt="shirt" />
              </div>
              <div className='h-fit w-fit '>
                <div className='h-[30px] flex bg-amber-50 my-[10px] w-full justify-between'>
                  <div className='w-[150px] font-bold h-full flex justify-center items-center bg-[#1da1f2] rounded-3xl overflow-hidden mx-[5px]'>
                    {item.prod_brand}
                  </div>
                  <div className='w-[150px] font-bold h-full flex justify-center items-center bg-[#1da1f2] rounded-3xl overflow-hidden mx-[5px]'>
                    {item.prod_name}
                  </div>
                </div>
              </div>
            </div>
            
        ))}
    </div>
  )
}

export default ProductGrid