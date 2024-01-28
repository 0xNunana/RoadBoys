import React from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Booking from '@/components/Booking'
import Schedule from '@/components/Schedule'
const Hero = () => {
  return (
    <div className='bg-hero bg-no-repeat bg-cover h-screen relative   '>
        <Navigation />
        <div className='bg-gradient-to-b from-transparent via-transparent to-black/50 absolute inset-0'></div>
        {/* <Schedule/> */}
         {/* <Image src='/jeep.webp' alt='jeep' width={3000} height={300}/> */}
     {/* <Booking/> */}
     <div className='flex flex-col justify-center items-center h-[80%] '>
        <p className='max-sm:pl-3 text-5xl md:text-6xl lg:text-7xl text-white font-extrabold animate-slidein1 '>Your Adventure Begins here!</p>

     </div>
     <div className='absolute bottom-10 right-0 left-0 flex justify-center items-center text-center flex-wrap'>
        <div className='space-y-2'>
        <p className='max-w-2xl font-semibold md:text-2xl text-white  p-3 animate-slidein2'>Discover the magic of long drives and camping. Connect with nature in it&apos;s purest form and awaken your senses as you navigate through rugged trails, lush forests and wild animals </p>
     <div className='flex justify-center items-center'>
     <p className='bg-white rounded-full w-40 px-5 py-2 font-semibold animate-slidein3'>Reserve a spot</p>
     </div>

        </div>
    
     </div>
    </div>
  )
}

export default Hero