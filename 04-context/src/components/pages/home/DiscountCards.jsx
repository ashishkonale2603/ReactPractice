import React from 'react'
import AutoSlider from './AutoSlider'

const DiscountCards = () => {
  return (
    <div className='w-full bg-amber-400 md:px-[32px]'>
        <AutoSlider autoPlayInterval={4500} />
    </div>
  )
}

export default DiscountCards