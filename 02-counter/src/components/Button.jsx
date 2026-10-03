import React from 'react'

const Button = ({id, onClick}) => {
    
  return (
    <div id={id} className='w-[50%] h-[50%] flex float-left justify-center items-center'>
        <button className='text-2xl font-bold border-2 p-[10px] rounded ' onClick={onClick}>Click Me {id}</button>
    </div>
  )
}

export default Button