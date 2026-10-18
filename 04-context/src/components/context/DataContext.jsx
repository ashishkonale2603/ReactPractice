import React, { useState, createContext, useContext } from 'react'

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [mensProducts] = useState([
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
      'prod_id': 125436,
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
  ]);

  const [womensProducts]=useState([
    {
      'prod_id': 201,
      'prod_brand': 'W for Woman',
      'prod_name': 'Ethnic Kurti',
      'prod_image': '/images/kurti.jpg',
      'prod_size': ['XL','L','M','S']
    },
    {
      'prod_id': 202,
      'prod_brand': 'Aurelia',
      'prod_name': 'Printed Palazzo',
      'prod_image': '/images/palazzo.jpg',
      'prod_size': [32, 30, 34]
    },
    {
      'prod_id': 203,
      'prod_brand': 'ZARA',
      'prod_name': 'Women Top',
      'prod_image': '/images/tops.jpg',
      'prod_size': ['L','M','S']
    },
    {
      'prod_id': 204,
      'prod_brand': "Levi's",
      'prod_name': 'Women Jeans',
      'prod_image': '/images/jean.jpg',
      'prod_size': [28, 30, 32, 34]
    }
  ]);

  const [kidsProducts]=useState([
    {
      'prod_id': 301,
      'prod_brand': 'Hopscotch',
      'prod_name': 'Kids Party Frock',
      'prod_image': '/images/partyfrok.jpg',
      'prod_size': ['3-4Y', '4-5Y', '5-6Y']
    },
    {
      'prod_id': 302,
      'prod_brand': 'Allen Solly Junior',
      'prod_name': 'Boys Casual Shirt',
      'prod_image': '/images/kidsshirt.jpg',
      'prod_size': ['2-3Y', '4-5Y', '6-7Y']
    },
    {
      'prod_id': 303,
      'prod_brand': 'Gini & Jony',
      'prod_name': 'Kids Denim Jeans',
      'prod_image': '/images/kidsdenim.jpg',
      'prod_size': ['4-5Y', '6-7Y', '8-9Y']
    }
  ]);
 
  return (
    <DataContext.Provider value={{mensProducts, womensProducts, kidsProducts}}>
      {children}
    </DataContext.Provider>
  );
};


export const useData = ()=>useContext(DataContext);