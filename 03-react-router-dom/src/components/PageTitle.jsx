import React from 'react'

const PageTitle = ({name}) => {
  return (
    <div className='flex bg-gray-600 h-[664px] w-full justify-center items-center'>
        <h1 className='text-7xl font-bold text-white'>{name}</h1>
    </div>
  )
}

export default PageTitle