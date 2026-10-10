import React from 'react'

const Gender = () => {
    const genderCards = [
        {
            'gender':'Mens',
            'link':'./src/assets/mens.jpg'
        },
        {
            'gender':'Womens',
            'link':'./src/assets/womens.jpg'
        },
        {
            'gender':'Kids',
            'link':'./src/assets/kids.jpg'
        },
    ]
  return (
    <div className=" bg-[url('./src/assets/clothes.jpg')] bg-center bg-cover h-150 w-full flex justify-center items-center">
        {genderCards.map((item,index) => (
            
            <button key={index} className='h-100 w-75 bg-[#E5F6FF] flex rounded-2xl'>
                <img className='relative group object-cover w-full h-full overflow-hidden shadow-2xl' src={item.link} alt="" />
                <div className='absolute inset-0 flex flex-col justify-center items-center bg-black/30 p-4 transition-colors group-hover:bg-black/40'>
                    <h2 className='text-white text-3xl font-bold tracking-wider drop-shadow-md'>
                        {item.gender}
                    </h2>
                </div>
            </button>
        ))}
    </div>
  )
}

export default Gender