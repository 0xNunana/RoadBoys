import React from 'react'

const Navigation = () => {
  return (
<nav className=' sticky top-0  backdrop-blur-[2px]  text-white bg-gradient-to-r from-transparent via-transparent to-black/15'>
<div className='flex justify-between items-center p-4 font-semibold max-w-7xl mx-auto  rounded-b-lg z-50'>
        <div className=''>RoadBoys</div>
    <ul className='hidden sm:flex gap-5'>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Gallery</li>
    </ul>
    <p className='sm:hidden'>Menu</p>
    {/* <div className='bg-white rounded-full px-3 py-2'>
        Join Us
    </div> */}
    </div>
</nav>


  
  )
}

export default Navigation