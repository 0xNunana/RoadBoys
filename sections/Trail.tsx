import Image from 'next/image'
import React from 'react'

const Trail = () => {
  return (
    <div className='my-2'>
        <p className='text-center font-semibold text-4xl py-4'>Next Trail</p>
        <div className=' max-w-7xl mx-auto '>
            <div className='flex rounded-2xl border max-sm:flex-wrap border-black '>
            <div className='' >
            <Image src='/map1.png' alt='trail' width={1700} height={100} className='md:h-[500px] object-cover rounded-l-2xl max-sm:rounded-r-2xl'/>
        </div>
        <div className='min-w-[300px]  flex justify-center items-center rounded-r-2xl'>
<div className='p-1 md:p-3 lg:p-5 font-extrabold md:text-2xl lg:text-3xl'>
    <p >1st July,2024</p>
    <p className='text-center tracking-tighter font-extralight '>to</p>
    <p>7th Jully,2024</p>
</div>
        </div>
            </div>
   
    </div>
    </div>
 
  )
}

export default Trail