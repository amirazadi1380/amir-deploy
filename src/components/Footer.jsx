import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-screen h-[1300px] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:h-[800px] lg:h-[450px] place-items-center text-center  bg-black/90 text-white/50 text-lg'>
    <div onClick={()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
     }} className='bg-sky-400 hidden lg:flex w-14 h-12 hover:scale-125 cursor-pointer duration-200  items-center justify-center absolute -bottom-[2660px] right-10 z-50'>
      <FontAwesomeIcon icon={faAngleUp} className='text-5xl text-black'/>
     </div>
        <div className='flex flex-col space-y-5'>
            <h1 className='text-white text-2xl font-bold uppercase mb-5'>categories</h1>
            <p>women</p>
            <p>man</p>
            <p>shoes</p>
            <p>watches</p>
        </div>
        <div className='flex flex-col space-y-5'>
            <h1 className='text-white text-2xl font-bold uppercase mb-5'>help</h1>
            <p>track order</p>
            <p>returns</p>
            <p>shipping</p>
            <p>FAQs</p>
        </div>
        <div className='flex flex-col space-y-5'>
            <h1 className='text-white text-2xl font-bold uppercase mb-5'>get in touch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae fugit illum minima laborum cum, cumque voluptates. Aspernatur, magnam eos!</p>
        </div>
        <div className='flex flex-col items-center '>
            <h1 className='text-white text-2xl font-bold uppercase mb-5'>EMAIL</h1>
            <p>www.azadyamyr1@gmail.com</p>
            <div className='flex space-x-5 pt-2'>
                <img src="telegram.png" alt="whats"  className='w-8'/>
                <img src="whatsapp.png" alt="teleg" className='w-8' />
                <img src="instagram.png" alt="insta"  className='w-8'/>
            </div>
        </div>

    </footer>
  )
}
