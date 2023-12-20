import { faAngleUp, faArrowAltCircleUp, faArrowUp, faArrowUpFromBracket, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import Basket from './Basket'
import Likes from './Likes'
import { AppContext } from '../App'
import Dark from './Dark'
import NavPopUp from './NavPopUp'

export default function Navbar({ open, setOpen }) {
  const { likeCount, setLikeCount, darkMode } = useContext(AppContext)
  const [showNav, setShowNav] = useState(false)
  const [buyCount, setBuyCount] = useState(2)
  const [likesOpen, setLikesOpen] = useState(false)
  return (
    <div className={`w-screen   ${darkMode ? 'bg-black text-white' : 'bg-white border-b'}  h-24 flex justify-between items-center realtive `}>
      <Basket open={open} setOpen={setOpen} />
      <Likes likesOpen={likesOpen} setLikesOpen={setLikesOpen} />
      <Dark />

      <div>
        <h1 className='text-3xl'><span className='font-extrabold px-1 lg:px-5'>AMIR</span>AZADI</h1>
      </div>
      <ul className={`${showNav ? 'opacity-100 h-96 transition-all duration-300 ease-in z-20' : 'opacity-0 h-0'} absolute  w-screen font-bold top-24 bg-sky-600 text-white ${darkMode ? 'lg:text-white' : 'lg:text-black'} text-xl pt-5 space-y-8 px-10 z-20 lg:static lg:flex lg:bg-transparent lg:pt-0 lg:h-24 lg:justify-center lg:items-center lg:space-x-4 lg:w-[500px] lg:opacity-100 xl:space-x-12 `}>
        <li className='lg:text-sky-600 cursor-pointer  md:hover:text-sky-600 duration-150 ease-in scale-105 flex flex-col font-bold  group'>
          <h1>Home</h1>
          <div className='bg-black hidden xl:flex h-0 absolute top-8  z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible w-[500px] group-hover:h-40 hover:h-40 hover:visible duration-300 text-sm text-center text-white rounded-xl pt-12' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi vitae eum reiciendis a. Aliquam?
          </div>
        </li>
        <li className='lg:pb-8  pl-5  font-normal text-xl font-sans opacity-80 cursor-pointer md:hover:text-sky-600 duration-150 ease-in scale-110'>
          <h1  onClick={()=>window.scrollTo({top:1300,behavior:'smooth'})}>Shop</h1>
        </li>
        <li className='lg:pb-8 pl-5  font-normal text-xl font-sans opacity-80 cursor-pointer md:hover:text-sky-600 duration-150 ease-in scale-110'>
          <h1 onClick={()=>window.scrollTo({top:500,behavior:'smooth'})}>Features</h1>
        </li>
        <li className='lg:pb-8  pl-5 font-normal text-xl font-sans opacity-80 cursor-pointer md:hover:text-sky-600 duration-150 ease-in scale-110'>
          <h1>Blog</h1>
          </li>
        <li className='lg:pb-8 pl-5  font-normal text-xl font-sans opacity-80 cursor-pointer md:hover:text-sky-600 duration-150 ease-in scale-110'>
          <h1 onClick={()=>window.scrollTo({top:3200,behavior:'smooth'})}>About</h1>
          </li>
        <li className='lg:pb-8 pl-5 font-normal text-xl font-sans opacity-80 cursor-pointer md:hover:text-sky-600 duration-150 ease-in scale-110'>
          <h1 onClick={()=>window.scrollTo({top:3200,behavior:'smooth'})}>Contact</h1>
        </li>
      </ul>
      <div className=' w-64 flex h-24 justify-center items-center mr-20 space-x-8 '>
        <img src="search.png" alt="search" className='w-8 h-8 cursor-pointer' />
        <div onClick={() => setOpen(true)} className='relative flex cursor-pointer'>
          <img src="shopping-cart (4).png" alt="shop" className={`${darkMode ? 'bg-white rounded-full' : 'bg-transparent'} w-8 h-8 `} />
          <span className='bg-sky-500 text-white text-base w-6 -right-4 -top-3 h-6 flex justify-center items-center absolute'>{buyCount}</span>
        </div>
        <div onClick={() => setLikesOpen(true)} className='flx relative cursor-pointer'>
          <img src="heart (4).png" alt="heart" className={`${darkMode ? 'bg-white rounded-full' : 'bg-transparent'} w-8 h-8`} />
          <span className='bg-sky-500 text-white text-base w-6 -right-4 -top-3 h-6 flex justify-center items-center absolute'>{likeCount}</span>
        </div>
      </div>
      {
        showNav ? <FontAwesomeIcon onClick={() => setShowNav(!showNav)} className='absolute lg:hidden right-8 text-4xl cursor-pointer' icon={faClose} /> : <FontAwesomeIcon onClick={() => setShowNav(!showNav)} className='absolute lg:hidden right-8 text-4xl cursor-pointer' icon={faBars} />
      }
    </div>
  )
}
