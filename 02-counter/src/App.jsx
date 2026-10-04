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
        <div className='bg-amber-200 w-1/2 h-[400px] flex flex-col'>
            <div className='h-1/2 w-full flex items-center'>
                <Button className='w-1/2' number={number} setNumber={setNumber} id="button-1" />
                <Button className='w-1/2' number={number} setNumber={setNumber} id="button-2" />
            </div>

            <h1 className='text-4xl h-1/2 flex justify-center items-center'>current number: {number}</h1>
        </div>
        
    </div>
  )
}

export default App