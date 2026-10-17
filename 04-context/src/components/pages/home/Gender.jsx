import React from 'react'
import { Link } from 'react-router-dom'

const Gender = () => {
    const genderCards = [
        {
            'gender':'Mens',
            'imglink':'/images/mens.jpg',
            'link':'/products/mens'
        },
        {
            'gender':'Womens',
            'imglink':'/images/womens.jpg',
            'link':'/products/womens'
        },
        {
            'gender':'Kids',
            'imglink':'/images/kids.jpg',
            'link':'/products/kids'
        },
    ]
  return (
    <div className=" bg-[url('/images/clothes.jpg')] bg-center bg-cover h-150 w-full flex justify-center items-center gap-20">
        {genderCards.map((item,index) => (
            <Link key={index} to={item.link} className='relative h-100 w-75 bg-[#E5F6FF] flex group rounded-2xl overflow-hidden'>
            
                <img className='object-cover w-full h-full overflow-hidden' src={item.imglink} alt="" />
                <div className='absolute inset-0 flex flex-col justify-center items-center bg-black/30 p-4 group-hover:bg-black/40'>
                    <h2 className='text-white text-3xl font-bold tracking-wider drop-shadow-md'>
                        {item.gender}
                    </h2>
                </div>
            
            </Link>
        ))}
    </div>
  )
}

export default Gender