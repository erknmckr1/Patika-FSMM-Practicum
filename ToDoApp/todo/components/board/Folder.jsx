import React from 'react'

function Folder() {
  return (
    <div className='h-1/3 w-full bg-white rounded-3xl p-3 border-2'>
            <div className='flex justify-between items-center '>
                <h5 className='font-semibold'>Folder</h5>
                <button className='btn'>All</button>
            </div>
        <div className='w-full h-[calc(100%_-_32px)] flex justify-center items-center'>
                folder
        </div>
    </div>
  )
}

export default Folder