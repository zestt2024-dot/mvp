import React, { useEffect, useState } from 'react'
import Style from'./Home.module.css'
import axios from 'axios'

export default function Home() {
    const [products, setproducts] = useState([])
    const [filterdProducts, setfilterdProducts] = useState([])
    const [loading, setloading] = useState(true)
    const [category, setcategory] = useState('All')

    const ApiUrl ="https://it-gate-academy.up.railway.app";

    useEffect(()=>{
      const fetchProducts = async ()=>{
        try{
            let {data} = await axios.get(`${ApiUrl}/api/products`);
            const fetchedProducts = data.products
            setproducts(fetchedProducts)
            setfilterdProducts(fetchedProducts)
            setloading(false)
        }catch(err){
            console.log(err);
        }
      }
      fetchProducts();
    },[])

    const filterCategory = (cat)=>{
          setcategory(cat);
          if (cat === 'All') {
            setfilterdProducts(products)
          }else{
            const filterd = products.filter(p=>p.category === cat);
            setfilterdProducts(filterd)
          }
    }

    
    
  return (
    <>
                    {filterdProducts.map((product) => (

                           
                                <img 
                                    src={`${ApiUrl}${product.image}`} 
                                  
                        
                                />
                            

                      
                    ))}
  
    </>
  )
}
