import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const ProductContext = createContext();

function ProductProvider({children}) {
  const [products, setProducts] =useState([]);
  useEffect(()=> {
    const axiosProducts = async ()=> {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = await response.data;
      setProducts(data)
    };
    axiosProducts();
  }, [])

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  
}

export default ProductProvider;
