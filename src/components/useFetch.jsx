import React, { useEffect, useState } from 'react'

export default function useFetch() {
    const [items,setItems] = useState([])
    useEffect(()=>{
        async function fetchMyData(){
            const res = await fetch('https://fakestoreapi.com/products')
            const data =  await res.json()
            setItems(data)
        }
        fetchMyData()
    },[])
  return {items,setItems}
}
