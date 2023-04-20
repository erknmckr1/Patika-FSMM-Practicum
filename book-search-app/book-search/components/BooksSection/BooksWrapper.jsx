import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import {AiOutlineHeart} from 'react-icons/ai'
function BooksWrapper() {
  const data = useSelector(state => state.books.data)
  
  return (
    <div className='container mx-auto flex justify-center'>
      <div className='  grid lg:grid-cols-3 grid-cols-2 gap-5 p-5   '>
      {data &&
          data.map((item, index) => {
            return (
              <div key={index} className=" relative w-full flex items-center   border-2 border-black sm:w-[300px]  h-[150px] sm:h-[300px] rounded-3xl bg-[#F0F3F4] ">
                <div className="w-1/3 sm:w-1/2  flex justify-center items-center p-1">
                  <Image
                    width={1000}
                    height={100}
                    alt="none"
                    src={item.imageLinks && item.imageLinks.thumbnail}
                    className='rounded-md'
                  />
                </div>
                <div className=" flex flex-col justify-evenly items-start p-3 italic h-full w-2/3 sm:w-1/2">
                  <p className="text-[#D4AC0D] text-[13px] sm:text-[20px]">{item.authors}</p>
                  {/* kitap ismi 20 den uzunsa kısaltalım. */}
                  <p className='text-[11px] sm:text-[15px]'>{item && item.title.length > 20 ? item.title.substring(0,20) + "..." : item.title}</p>
                  <Link className='text-[11px] sm:text-[15px]   underline hover:text-blue-600' href={`/detail/${item.id}`}>Detail</Link>
                </div>
                <button className='absolute text-[25px] top-3 right-3' ><AiOutlineHeart/></button>
              </div>
            );
          })}
      </div>
      </div>
  )
}

export default BooksWrapper