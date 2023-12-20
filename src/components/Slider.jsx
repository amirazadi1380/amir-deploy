import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { AppContext } from '../App';
export default function Slider() {
  Aos.init()
  const images = [
    {
      src: 'man2.png',
      header: 'men new-season',
      par: 'jackes & coats'
    },
    {
      src: 'woman1.png',
      header: 'women collection 2024',
      par: 'new season'
    },
    {
      src: 'woamn6.png',
      header: 'woamn new-collection',
      par: 'new arrival'
    },

  ]
  const {darkMode} = useContext(AppContext)
  return (
    <Swiper className={`${darkMode ? 'bg-stone-900': 'bg-stone-300'} z-0 w-screen h-[500px] lg:h-[700px]`}
      modules={[Navigation,Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{delay:5000}}
      

    >

        {images.map((item, index) =>
         <SwiperSlide className='px-3 py-2 space-y-20 lg:px-80 lg:py-20 relative' key={index}>
          <img src={item.src} alt="casd" className='absolute -right-0 md:right-2 w-[500px] lg:w-[850px] -top-20 -z-10'/>
          <h1 initial={{y:-50,opacity:0,rotate:80}} animate={{y:0,opacity:1,rotate:0}} transition={{delay:0.4}} className='capitalize text-5xl font-sans opacity-90'>{item.header}</h1>
          <p data-aos="fade-right" className='capitalize text-[60px] lg:text-[80px] opacity-80 font-extrabold font-serif'>{item.par}</p>
          <button onClick={()=>{
            window.scrollTo({top:1200,behavior:'smooth'})
          }} className='capitalize bg-sky-500  text-white w-52 h-14 text-2xl font-normal hover:bg-black duration-300 rounded-full' >shop now</button>          
        </SwiperSlide>)}


    </Swiper>

  )
}
