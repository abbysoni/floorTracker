'use client'
import {useEffect, useState} from 'react'


export default function productPage() {

    const [product, setProduct] = useState([]);

    // useEffect( async () => {
    //     console.log('fetchData in progress')
    //   try {
    //       let pd = await fetch("https://dummyjson.com/users");
    //       pd = await pd.json();

    //     //   console.log(pd.users.id);
    //       setProduct(pd.users.id)

    //     } catch (error) {
    //       console.log(error);
    //     }
        
    //   }, [])

  return (
    <div>
        <h1>Product List</h1>
        
            {/* {
                product.map((item) =>(
                    <h3>{item.title}</h3>
                ))
            } */}
        
    </div>
  )
}

