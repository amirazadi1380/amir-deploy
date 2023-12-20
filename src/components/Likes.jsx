import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

export default function Likes({ likesOpen, setLikesOpen }) {
  const [selectedInedx, setSelectedIndex] = useState()
  const { likeArray, setLikeArray, totalPrice, setTotallPrice,likeCount,setLikeCount } = useContext(AppContext)

// const handleDelete = (index)=> {
//   setLikeArray(likeArray.filter(( i) => i !== index))
//   // setTotallPrice((prev)=>prev - item.price)
//   // setLikeCount(likeCount - 1)
// }
  return (
    <div className={`${likesOpen ? ' opacity-100 duration-150' : 'w-0 h-0 opacity-0'} fixed inset-0 text-black bg-black/90 z-30 flex justify-end`}>
      <div className={`${likesOpen ? 'w-[500px] duration-150 ease-linear' : 'w-0 duration-300 ease-linear'}  h-screen bg-white space-y-10`}>
        <div className='text-4xl font-bold  w-full flex justify-between  h-20 items-center px-5'>
          <h1 className=' capitalize opacity-90'>your Likes</h1>
          <FontAwesomeIcon className='text-5xl cursor-pointer hover:scale-110 duration-150 ease-in' onClick={() => setLikesOpen(false)} icon={faClose} />
        </div>
        <div className='text-black space-y-12 '>
          {likeArray.filter((item, index) => index != 0).map((item, index) => <div className='w-full shadow-2xl px-10 border-b flex  items-center  justify-between relative' key={index}>
            <img src={item.src} alt="asd" className='w-28 h-32' />
            <div className='flex flex-col justify-center items-center space-y-2'>
              <h1 className='text-3xl font-bold opacity-60'>{item.title.substring(0, 12)}</h1>
            </div>
          </div>)}
        </div>
        <div className='flex w-full h-20 items-center justify-between px-5' >
          <h1 className='text-4xl opacity-70 font-semibold'>Total is :  $<span className='text-red-600'>{totalPrice}</span>
          </h1>

          <button className='bg-black text-white w-28 h-12 rounded-xl hover:w-32 hover:scale-105 duration-200'>buy</button>
        </div>
      </div>
    </div>
  )
}
