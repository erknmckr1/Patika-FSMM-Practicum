import React, { useState } from 'react'
import Logo from '../ui/Logo'
import TextInput from '../ui/TextInput'


function Header() {
   
  return (
    <div className='bg-black  h-[5.5rem] '>
        <div className='container mx-auto h-full flex items-center justify-between w-full'>
            <Logo/>
            <TextInput/>
            <nav className='text-white'>
                <ul className='flex'>
                    <li className='px-3 hover:underline'>
                        Home
                    </li>
                    <li className='px-3 hover:underline'>
                        Detail
                    </li>
                    <li className='px-3 hover:underline'>
                        About
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header