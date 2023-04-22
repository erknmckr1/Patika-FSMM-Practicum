import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
function Details() {
  return (
    // detay sayfasına kullandıgımız header  search kısmını kaldırdık.
    <div className='bg-black  h-[5.5rem] '>
        <div className='container mx-auto h-full flex items-center justify-between w-full'>
            <Logo/>
            <nav className='text-white'>
                <ul className='flex'>
                    <li className='px-3 hover:underline'>
                        <Link href="/">Home</Link>
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

export default Details