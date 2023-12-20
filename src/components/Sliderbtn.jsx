import React from 'react'
import { useSwiper } from 'swiper/react'

export default function Sliderbtn() {
 const swiper = useSwiper()
  return (
    <div className='flex space-x-10 w-64 m-10'>
      <button className='absolute bottom-0 mr-10 left-0' onClick={()=>swiper.slideNext}>next</button>
      <button className='absolute bottom-0 mr-10 left-64' onClick={()=>{
        alert('prev')
        swiper.allowSlidePrev}}> prev</button>
    </div>
  )
}
