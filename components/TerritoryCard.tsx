import Image from 'next/image'
import React from 'react'

const TerritoryCard = () => {
  return (
    <div className='bg-gray-200 rounded-2xl relative'>
        <Image src='/girrafe.webp' alt='jeep' width={700} height={100} className='rounded-2xl '/>
        <p className='bg-black/15 font-extrabold absolute inset-0 flex justify-center items-center rounded-2xl'>Ghana</p>
    </div>
  )
}

export default TerritoryCard