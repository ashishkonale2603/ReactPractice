import React from 'react'
import {Outlet} from 'react-router-dom'
import ProductGrid from './ProductGrid'

const Mens = () => {
  const mens= [
    {
      'prod_id': 123456,
      'prod_brand': 'Peter England',
      'prod_name': 'Casual Shirt',
      'prod_image': '/images/casual_shirt.jpg',
      'prod_size': ['XL','L','M','S']
    },
    {
      'prod_id': 12345,
      'prod_brand': 'Van Heusan',
      'prod_name': 'Casual Pant',
      'prod_image': '/images/casual_pant.jpg',
      'prod_size': [34,32,36,30]
    },
    {
      'prod_id': 1236,
      'prod_brand': 'ZARA',
      'prod_name': 'T-Shirt',
      'prod_image': '/images/t-shirt.jpg',
      'prod_size': ['XL','L','M','S']
    },
    {
      'prod_id': 1256,
      'prod_brand': "Levi's",
      'prod_name': 'Jeans',
      'prod_image': '/images/jeans.jpg',
      'prod_size': [34,32,36,30,38]
    },
    {
      'prod_id': 1256,
      'prod_brand': "Levi's",
      'prod_name': 'Jeans',
      'prod_image': '/images/jeans.jpg',
      'prod_size': [34,32,36,30,38]
    }
  ]
  return (
    <div className='bg-[#E5F6FF]  flex'>
      <ProductGrid data={mens} />
      <Outlet />
    </div>
  )
}

export default Mens