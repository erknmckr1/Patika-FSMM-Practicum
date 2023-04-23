import React, { useEffect } from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import { fetchBooks } from '@/redux/services'
// search işlemini ve fetch işlemleri için olusturdugumuz action creator'u burada tetıkledık
function Input() {
  const data = useSelector((state)=>state.books.data)
  const dispatch = useDispatch()
  const [queryText,setQueryText] = useState("")
  const handleChange = (e)=>{
      setQueryText(e.target.value)
  }
  // useEffect(()=>{
  //   dispatch(fetchBooks({queryText}))
  // },[dispatch])

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(fetchBooks({queryText}))
  }
  return (
    <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
        <input type="text" onChange={handleChange} value={queryText} className=' sm:w-[200px] w-[150px] p-2 placeholder:text-white  placeholder:italic border-b-2 outline-none border-white bg-transparent focus:border-yellow-500 transition-all duration-500 ease-linear text-white' placeholder='search...' />
        <button type='submit' className='w-[40px] h-[40px] text-white' ><FaSearch/></button>
    </form>
  )
}

export default Input