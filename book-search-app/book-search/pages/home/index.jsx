import Carousel from '@/components/Carousel'
import React from 'react'
import BooksWrapper from '@/components/BooksSection/BooksWrapper'

function index() {
  return (
    <div className='h-full w-full '>
      <Carousel/>
      <BooksWrapper/>
    </div>
  )
}

export default index