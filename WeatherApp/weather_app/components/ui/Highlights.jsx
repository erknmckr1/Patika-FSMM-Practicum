import React from 'react'
import Image from 'next/image'
function Highlights({title,prop,type,src}) {
  return (
    <div className='w-[10rem] h-[10rem] bg-white rounded-3xl flex flex-col items-center justify-between p-1'>
        <span className='text-[grey]'>{title}</span>
        <div className='flex justify-between items-start'>
          <span className='text-[40px]'>{prop} </span>
          <span className='text-[25px]'>{type}</span>
          
        </div>
        <div className="relative w-[40px] h-[40px]">
            <Image src={src} fill objectFit="cover" />
          </div>
        <div>

        </div>
    </div>
  )
}

export default Highlights