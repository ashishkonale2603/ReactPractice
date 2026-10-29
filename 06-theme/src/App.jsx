import React, { useEffect } from 'react'
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState();
  useEffect(()=>{
    if (theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
  },[theme])
  return (
    <div className='h-screen w-screen bg-white dark:bg-gray-800'>
      <h1 className='bg-amber-400 text-[40px] py-[20px] justify-center flex font-semibold'>Welcome to my new Website.</h1>
      <div className='h-[100px] w-fit mx-auto flex items-center justify-center mt-[30px] dark:text-white'>
        <div className='flex justify-center'>
          <button 
          className='h-[50px] w-[100px] border-[2px] rounded-[8px] mx-[30px]'
          onClick={()=>setTheme('light')}>Light</button>
          <button 
          className='h-[50px] w-[100px] border-[2px] rounded-[8px] mx-[30px]'
          onClick={()=>setTheme('dark')}>Dark</button>
        </div>
      </div>
      <div className='p-[40px] dark:bg-black'>
        <div className='h-fit w-fit bg-blue-200 p-[50px] dark:bg-gray-800 dark:text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam necessitatibus natus perspiciatis harum rem qui quaerat nesciunt quo cum? Quae qui voluptatum, dolore voluptates quis error odio quod molestiae!
          Libero facere quaerat saepe soluta facilis. Doloremque rerum, magni ad nobis deserunt, nisi doloribus fuga ut illum corporis voluptas eaque obcaecati? Unde adipisci expedita inventore pariatur consequatur aut sit accusantium.
          Soluta, vitae repellendus? Minus animi esse ea nulla ullam iste eveniet voluptate ipsam facere aut tempora laborum culpa corporis nisi dolore, odit dignissimos consequatur! Iste quas reiciendis fugit repellendus ipsam!
          Odit, dolor magni, tempora corrupti expedita atque, minus quasi unde ad officiis minima. Magni praesentium velit in ab perferendis, tempora quaerat earum, odit numquam accusamus distinctio repellendus libero incidunt ea.
          Ipsa doloremque corporis asperiores pariatur necessitatibus officiis dicta magni ipsum dolorum fuga sit odio sapiente est, ipsam porro obcaecati sed nisi repellat, architecto voluptatum blanditiis perspiciatis ad officia! Culpa, vitae.
          Natus, voluptatibus mollitia non illo aspernatur, amet sit, cum expedita a laudantium tenetur? Nisi sit consequuntur non temporibus commodi reiciendis corrupti cumque, dolore similique amet, nostrum distinctio sunt, excepturi aspernatur.
          Tenetur ut, nobis doloribus officia non numquam consequuntur eos perspiciatis nulla optio totam ipsa dolores quidem quisquam enim eius distinctio fuga quos. Perferendis debitis maiores non magnam aut et! Quisquam?
          Repellendus blanditiis quis quia sequi consectetur non eveniet tenetur, vero facere placeat praesentium necessitatibus provident saepe, velit fugit alias consequatur, ut autem mollitia aliquid. Aliquid facilis dolore nostrum fugit cupiditate?
          Similique quaerat ullam veniam quis inventore nobis, eius temporibus natus dolore quod molestias animi perspiciatis magnam minus exercitationem corporis distinctio eos nisi, est sapiente. Itaque voluptatum eos fugit. Quod, esse.
          Cupiditate ipsum illo dignissimos eos rem nihil voluptatem reprehenderit officiis perspiciatis a! Expedita voluptates enim eligendi sapiente velit voluptas soluta ex. Modi cumque enim illum perspiciatis quibusdam sapiente temporibus reprehenderit!
        </div>
      </div>
    </div>
  )
}

export default App