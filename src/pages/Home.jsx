import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { AppContext } from '../App'
export default function Home() {
  const [open,setOpen] = useState(false)
  const {darkMode,setDarkMode} = useContext(AppContext)
  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white'} w-screen h-screen`}>
      <Navbar open={open} setOpen={setOpen}/>
      <Slider/>
      <Category/>
      <Products/>
      <Footer/>
   
      </div>
  )
}
