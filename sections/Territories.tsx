import TerritoryCard from '@/components/TerritoryCard'
import React from 'react'

const Territories = () => {
  return (
    <div className='bg-gradient-to-b from-black/30 to-green-300 '>
      <div className='text-center font-semibold text-5xl p-5'>
        <p>Gallery</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 px-5'>
      <TerritoryCard/>
      <TerritoryCard/>
      <TerritoryCard/>
      <TerritoryCard/>
      <TerritoryCard/>
      <TerritoryCard/>
      </div>
   
    </div>
  )
}

export default Territories