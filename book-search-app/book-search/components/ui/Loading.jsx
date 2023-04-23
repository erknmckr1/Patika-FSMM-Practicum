import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className='h-screen w-screen relative opacity-40 bg-white z-50   '>
        <div className='w-full flex justify-center items-center h-screen opacity-100 absolute '>
        <Image src="/loadingBook.gif" width={500} height={50} alt='loading' />
        </div>
        
    </div>
  )
}

export default Loading