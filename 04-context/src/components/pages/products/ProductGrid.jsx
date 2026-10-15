import React from 'react'

const ProductGrid = (props) => {
  return (
    <div className='font-serif w-full my-[40px] flex flex-wrap bg-[#A4DDED] justify-center'>
        {props.data.map((item,index) => (
            <div key={index} className='h-[400px] my-[20px] w-[320px] bg-[#E5F6FF] mx-[30px] rounded-2xl overflow-hidden border-[2px] border-blue-500'>
              <div className='h-[300px] flex '>
                <img className='h-full w-full object-cover' src={item.prod_image} alt="shirt" />
              </div>
              <div className='h-fit w-fit '>
                <div className='h-[30px] flex  my-[10px] w-full justify-between'>
                  <div className='w-[150px] font-bold h-full flex justify-center items-center bg-[#1da1f2] rounded-3xl overflow-hidden mx-[5px]'>
                    {item.prod_brand}
                  </div>
                  <div className='w-[150px] font-bold h-full flex justify-center items-center bg-[#1da1f2] rounded-3xl overflow-hidden mx-[5px]'>
                    {item.prod_name}
                  </div>
                </div>
                <div className='w-full h-full flex font-mono'>
                  <h3 className='mx-[15px] font-bold p-[5px]'>Size:</h3>
                  {item.prod_size.map((obj, ind) =>{
                    return <div key={ind} className='bg-blue-300 mx-[5px] px-[10px] py-[5px] rounded-3xl'>{obj}</div>
                  })}
                </div>
              </div>
            </div>
            
        ))}
    </div>
  )
}

export default ProductGrid