import React, { useContext, useState } from 'react'
import useFetch from '../components/useFetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../App';
import ProductPopUp from './ProductPopUp';

export default function Products() {
    const { likeArray, setLikeArray, setLikeCount, likeCount, darkMode, setTotallPrice, totalPrice, selectedProduct, setSelectedProduct } = useContext(AppContext)
    const [open, setOpen] = useState(false)
    const [showProductNumber, setShowProductNumber] = useState(10)
    const { items, setItems, isLoading } = useFetch()
    const handleMore = () => {
        setShowProductNumber(showProductNumber + 5)
    }
    const handleLess = () => {
        setShowProductNumber(showProductNumber - 10)
    }
    return (
        <>
            <ProductPopUp open={open} setOpen={setOpen} />

            <ToastContainer autoClose={1000} theme='dark' />
            <div className={`${darkMode ? 'bg-black text-white border' : 'bg-white text-black'} w-screen xl:gap-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-5 place-items-center pb-10`}>
                {isLoading ? <div className='w-20 h-20 border-4 border-black border-b-white inline-block rounded-full animate-spin'></div>
                    :
                    items.filter(item => item.id < showProductNumber).map((item, index) =>
                        <div key={index} className='flex flex-col space-y-1 '>
                            <div className={`${darkMode ? 'border-[1px] border-white/30 bg-black/50' : 'border-[1px] border-black/30'} w-[420px] h-[450px] rounded relative`}>
                                <img onClick={() => {
                                    setOpen(true)
                                    setSelectedProduct([{
                                        title: item.title,
                                        price: item.price,
                                        src: item.image,
                                        description: item.description
                                    }])
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
                {showProductNumber < 20 ? <button onClick={handleMore} className='bg-stone-300  hover:bg-black hover:text-white duration-200 cursor-pointer  w-52 h-16 rounded-full'>show more</button> : <button onClick={handleLess} className='bg-stone-300  hover:bg-black hover:text-white duration-200 cursor-pointer  w-52 h-16 rounded-full'>show less</button>}
            </div>
        </>
    )
}
