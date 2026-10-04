import React from 'react'

const Button = ({id, number, setNumber, className}) => {
  function MyClick(){
        let newNum=number+1;
        setNumber(newNum);
    }
    
  return (
    <div id={id} className={className}>
        <button onClick={MyClick} className='w-full text-2xl font-bold border-2 p-[10px] rounded '>Click Me {id}</button>
    </div>
  )
}

export default Button