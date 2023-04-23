import Carousel from '@/components/ui/Carousel'
import React from 'react'
import BooksWrapper from '@/components/BooksSection/BooksWrapper'
import { useSelector } from 'react-redux'
import Loading from '@/components/ui/Loading'
function index() {
  const status = useSelector((state) =>state.books.status )
  return (
    <div className='h-full w-screen flex flex-col justify-center items-center relative '>
      {/* status'un durumuan gore loading animasonu ekledık. */}
      {status === 'loading' ? <Loading/> : null }
      <Carousel/>
      <BooksWrapper/>
    </div>
  )
}

export default index