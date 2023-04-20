import Carousel from '@/components/Carousel'
import React from 'react'
import BooksWrapper from '@/components/BooksSection/BooksWrapper'

function index() {
  return (
    <div className='h-full w-screen flex flex-col justify-center items-center '>
      <Carousel/>
      <BooksWrapper/>
    </div>
  )
}

export default index