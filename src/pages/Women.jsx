import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { ToastContainer, toast } from 'react-toastify'
import useFetch from '../components/useFetch'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import ProductPopUp from '../components/ProductPopUp';



export default function Women() {
    const { darkMode, setSelectedProduct, setTotallPrice, setLikeCount, likeCount,setLikeArray,likeArray } = useContext(AppContext)
    const { items } = useFetch()
    const [open,setOpen] = useState(false)
    return (
        <div className={`${darkMode ? 'bg-black w-screen h-screen' : 'bg-white w-screen h-full'}`}>
            <Navbar/>
            <ProductPopUp open={open} setOpen={setOpen}/>
            <ToastContainer theme='dark' autoClose='500'/>
            <div className={`${darkMode ? 'bg-black text-white border border-white/10' : 'bg-white text-black'} pt-10 w-screen xl:gap-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-5 place-items-center pb-10`}>
                {items.filter(item => item.category == `women's clothing`).map((item, index) =>
                    <div key={index} className='flex flex-col space-y-1 '>
                        <div className={`${darkMode ? 'border-[1px] border-white/10 bg-black/50' : 'border-[1px] border-black/30'} w-[420px] h-[450px] rounded relative`}>
                            <img onClick={() => {
                                setSelectedProduct([{
                                    title: item.title,
                                    price: item.price,
                                    src: item.image,
                                    description: item.description
                                }])
                                setOpen(true)
                            }} src={item.image} alt='dsa' className='w-44 h-[250px] absolute top-16 hover:scale-110 duration-300 cursor-pointer left-1/2 -translate-x-1/2' />
                        </div>
                        <div className='flex w-full justify-between'>
                            <div className='opacity-90 font-serif'>
                                <h1 className='text-xl opacity-70'>{item.title.substring(0, 10)}</h1>
                                <h1 className='font-sans'>${item.price}</h1>
                            </div>
                            <img onClick={() => {
                                setLikeArray((prev) => [...prev, {
                                    title: item.title,
                                    price: item.price,
                                    src: item.image
                                }])
                               
                                setTotallPrice((prev) => prev + item.price)
                                setLikeCount(likeCount + 1)
                                toast('item added to favorites')
                           }} src="heart (4).png" alt="heart" className={`w-8 h-8 hover:scale-125 duration-200 cursor-pointer ${darkMode ? 'bg-white rounded-full w-10 h-5 object-contain hover:scale-150 duration-200' : ''}`} />
                        </div>
                    </div>)}



            </div>
        </div>
    )
}
