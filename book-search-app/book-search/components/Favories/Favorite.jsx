import React from 'react'
import { useSelector } from 'react-redux'
function Favorite() {
    const {favoriteBooks} = useSelector(state =>state.books)
    console.log(favoriteBooks)
  return (
    <div className=''>


    </div>
  )
}

export default Favorite