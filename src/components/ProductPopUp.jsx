import React, { useContext } from 'react'
import { AppContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function ProductPopUp({open,setOpen}) {
    const {selectedProduct} = useContext(AppContext)
  return (
    <div className={`${open ? 'flex' : 'hidden'} fixed inset-0 bg-black/90 z-50 w-screen h-screen  justify-center items-center`}>
    <div className={`${open ? 'w-[500px] h-[500px] lg:w-[900px] lg:h-[600px] transition-all duration-300 ease-in' : 'w-0 h-0'} rounded-xl  bg-white text-black relative flex`}>
        <FontAwesomeIcon onClick={()=>setOpen(false)} icon={faClose} className='absolute text-5xl right-2 cursor-pointer'/>
            {selectedProduct.map((item,index)=>
            <div className='w-full h-full flex justify-between items-center px-5' key={index}>
                <div>
                    <img src={item.src} alt="image" className='w-40 lg:w-80 hover:scale-110 duration-150'  />
                </div>
                <div className='w-64 lg:w-96 flex flex-col items-center'>
                    <h1 className='text-xl font-extrabold'>{item.title}</h1>
                    <h1 className='text-sm'>{item.description}</h1>
                    <h1>${item.price}</h1>
                    <button className='bg-black text-white rounded-full hover:w-64 duration-200 text-lg w-48 h-10'>add to card</button>
                </div>
            </div>)}
    </div>
    </div>
  )
}
