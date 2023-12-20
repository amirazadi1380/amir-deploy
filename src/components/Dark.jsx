import React, { useContext } from 'react'
import { AppContext } from '../App'

export default function Dark() {
    const {darkMode,setDarkMode} = useContext(AppContext)
  return (
    <div className={`${darkMode ? 'bg-white justify-start transition-all duration-300 ease-linear' : 'bg-black justify-end transition-all duration-200 ease-linear'} absolute flex w-20 h-9 border border-black left-60 rounded-full`}>
        <img onClick={()=>setDarkMode(!darkMode)} src="night-mode (2).png" className={`${darkMode ? 'border border-black/20' : 'hidden'} cursor-pointer w-9 h-9 rounded-full`} alt="dark" />
        <img onClick={()=>setDarkMode(!darkMode)} src="night-mode.png" className={`${darkMode ? 'hidden' : 'bg-white '} cursor-pointer w-9 rounded-full h-9 `} alt="night" />
    </div>
  )
}
