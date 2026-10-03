import React from 'react'
import Button from './components/Button'
import { useState } from 'react';

const App = () => {
    const [number, setNumber] = useState(0);
        
        
    function MyClick(){
        let newNum=number+1;
        setNumber(newNum);
    }
  return (
    <div className='min-h-screen bg-purple-400 flex justify-center items-center'>
        <div className='bg-amber-200 h-[200px] w-[40%] h-[400px] rounded-2xl'>
            <Button onClick={MyClick} number={number} id="button-1" />
            <Button onClick={MyClick} number={number} id="button-2" />

            <h1 className='text-4xl h-[50%] flex justify-center items-center'>current number: {number}</h1>
        </div>
        
    </div>
  )
}

export default App