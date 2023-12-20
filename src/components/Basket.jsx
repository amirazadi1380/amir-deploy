import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Basket({open,setOpen}) {
  return (
    <div className={ `${open ? ' opacity-100' : 'w-0 h-0 opacity-0'} fixed inset-0 flex z-50 bg-black/90 justify-end text-black`}>
        <div className={`${open ? 'bg-white w-[500px] lg:w-[500px] transition-all opacity-100 duration-200 ease-in' : ' w-0 opacity-0 duration-300 ease-linear transition-all'} h-screen rounded flex flex-col justify-between py-10`}>
            <div className='text-4xl font-bold  w-full flex justify-between  h-20 items-center px-5'>
                <h1 className=' capitalize opacity-90'>your card</h1>
                <FontAwesomeIcon className='text-5xl cursor-pointer hover:scale-110 duration-150 ease-in' onClick={()=>setOpen(false)} icon={faClose}/>
            </div>
            <div className='w-full h-20 flex items-center'>
                <p className='capitalize opacity-80 ml-5'>total : $175</p>
            </div>
            <div className='flex w-full justify-center space-x-2'>
                <button className='w-52 h-14 rounded-full bg-black uppercase text-white  text-lg hover:bg-sky-400 duration-150 ease-in cursor-pointer'>
                    view card
                </button>
                <button className='w-52 h-14 rounded-full bg-black uppercase text-white text-lg hover:bg-sky-400 duration-150 ease-in cursor-pointer '>check out</button>
            </div>
           
        </div>
    </div>
  )
}
