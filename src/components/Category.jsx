import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import Basket from './Basket'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'
export default function Category() {
  const {darkMode} = useContext(AppContext)
  const navigate = useNavigate()
  return (
    <div className={`${darkMode ? 'bg-black text-white' :'bg-white'} grid py-20 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center z-10 place-content-center w-screen`}>

      <div onClick={()=>navigate('women')}  className='w-[500px] md:w-96 h-80 border relative flex cursor-pointer group hover:text-white hover:bg-sky-600/80 transition-all duration-200 ease-linear'>
        <img src="woman4.png" alt="woman" className='w-[500px] group-hover:scale-110 duration-150 ease-in group-hover:bottom-6 h-72 object-contain absolute bottom-2 -right-24 z-0' />
        <div className='flex flex-col mt-10 ml-5 space-y-3'>
          <h1 className='font-bold text-5xl'>Women</h1>
          <p className='text-xl text-black/90 group-hover:text-white '>spring 2018</p>
          <div onClick={()=>alert('hi')} className='pt-10  pl-5 hover:scale-125 hidden group-hover:flex w-36 flex-col  transition-all duration-150 ease-linear  h-32 z-20'>
            <h1 className='w-0 text-white h-0 group-hover:h-10 opacity-0 group-hover:w-28 group-hover:opacity-100 transition-all duration-150 ease-in'>shop now</h1>
            <div className='w-28 h-[2px] bg-white'></div>
          </div>
        </div>
      </div>
      <div onClick={()=>navigate('men')} className='w-[500px] md:w-96 h-80 border relative flex cursor-pointer group hover:text-white hover:bg-sky-600/80'>
        <img src="man1.png" alt="man" className='w-[500px] group-hover:scale-110 duration-150 ease-in group-hover:bottom-6 h-72 object-contain absolute bottom-2 -right-24 z-0' />
        <div className='flex flex-col mt-10 ml-5 space-y-3'>
          <h1 className='font-bold text-5xl'>Men</h1>
          <p className='text-xl text-black/90'>spring 2018</p>
          <div onClick={()=>alert('hi')} className='pt-10 pl-5 hover:scale-125 hidden group-hover:flex w-36 flex-col  transition-all duration-150 ease-linear  h-32 z-20'>
            <h1 className='w-0 text-white h-0 group-hover:h-10 opacity-0 group-hover:w-28 group-hover:opacity-100 transition-all duration-150 ease-in'>shop now</h1>
            <div className='w-28 h-[2px] bg-white'></div>
          </div>
        </div>
      </div>
      <div onClick={()=>navigate('accesories')} className='w-[500px] md:w-96 h-80 border relative flex cursor-pointer group hover:text-white hover:bg-sky-600/80'>
        <img src="acc1.png" alt="woman" className='w-[500px] group-hover:scale-110 duration-150 ease-in group-hover:bottom-6 h-72 object-contain absolute bottom-2 -right-24 z-0' />
        <div className='flex flex-col mt-10 ml-5 space-y-3'>
          <h1 className='font-bold text-5xl'>Accessories</h1>
          <p className='text-xl text-black/90 capitalize'>new trend</p>
          <div onClick={()=>alert('hi')} className='pt-10 pl-5 hover:scale-125 hidden group-hover:flex w-36 flex-col  transition-all duration-150 ease-linear  h-32 z-20'>
            <h1 className='w-0 text-white h-0 group-hover:h-10 opacity-0 group-hover:w-28 group-hover:opacity-100 transition-all duration-150 ease-in'>shop now</h1>
            <div className='w-28 h-[2px] bg-white'></div>
          </div>
        </div>
      </div>


    </div>
  )
}
