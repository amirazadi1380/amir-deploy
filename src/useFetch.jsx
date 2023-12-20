import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useFetch() {
    const [users,setUsers] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        async function fetchMyData(){
            setIsLoading(true)
            const res = await fetch ('https://dummyjson.com/users')
            const data = await res.json()
            setUsers(data.users)
            setIsLoading(false)
        }
        fetchMyData()
    },[])
  return {users,setUsers,isLoading}
}
