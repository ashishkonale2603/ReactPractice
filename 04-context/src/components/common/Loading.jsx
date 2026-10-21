import React from 'react'

const Loading = ({ text = 'Loading...' }) => {
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-black/70 '>
        <div className='flex flex-col items-center'>
            <img className='h-[100px] w-[300px] object-cover' src="/images/clothes.jpg" alt="loading" />
            <h2 className='text-white font-serif text-[20px] tracking-wider'>{text}</h2>
        </div>
    </div>
  )
}

export default Loading