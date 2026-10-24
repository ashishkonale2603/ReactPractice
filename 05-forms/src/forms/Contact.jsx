import React from 'react'
import { useState, useEffect } from 'react'

const Contact = () => {
  let formbox='flex flex-rows gap-[10px] w-full'
  let inputcss='border-[2px] rounded-[3px] p-[1px]'

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  useEffect(()=>{
    console.log('The updated value is ', name)
  },[name]);
  useEffect(()=>{
    console.log('The updated value is ', mail)
  },[mail]);

  function submitHandler(e){
    e.preventDefault()
    console.log('The name is ',name)
    console.log('The mail is ',mail)
  }

  return (
    <div className=' bg-white flex rounded-5xl'>
      <div className='p-[50px] justify-center items-center'>
        <h2 className='justify-center text-[40px] flex '>Contact Form</h2>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className='flex flex-col text-[25px] my-[10px] gap-[10px]'>
            <div className={formbox}>
              <label htmlFor="name">Enter Name: </label>
              <input 
              className={inputcss} 
              type="text" 
              id='name'
              value={name} 
              onChange={(e)=>{
                setName(e.target.value)
              }}
              placeholder='John Doe' />
            </div>
            <div className={formbox}>
              <label htmlFor="email">Enter Email: </label>
              <input 
              className={inputcss} 
              type="text" 
              id='email' 
              value={mail} 
              onChange={(e)=>{
                setMail(e.target.value)
              }}
              placeholder='john@doe.com' />
            </div>
            <div className='justify-center flex m-[30px]'>
              <button className='border-[2px] p-[5px] rounded-[5px]'>Submit!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact