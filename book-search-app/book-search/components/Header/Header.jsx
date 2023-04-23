import React, { useState } from 'react'
import Logo from '../ui/Logo'
import TextInput from '../ui/TextInput'
import {CiMenuBurger} from 'react-icons/ci'
import Link from 'next/link'

function Header() {
    // mobıl ekranlar menunun acılıp kapanma durumu ıcın olusturdugumuz state
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <div className='bg-black  h-[5.5rem] fixed z-30 w-full px-3 '>
        <div className='container mx-auto h-full flex items-center justify-between w-full relative'>
            <Logo/>
            <TextInput/>
            <button className='text-white sm:hidden block' onClick={toggleMenu}><CiMenuBurger/></button>
            <nav className={`sm:text-white bg-white sm:bg-transparent w-[100px] h-[100] sm:w-[300px] ${isMenuOpen ? "block" : "hidden"} sm:block sm:static absolute right-0 top-[3.5rem] opacity-80  transition-all duration-500 ease-in-out`}>
                <ul className='flex flex-col sm:flex-row justify-center items-center'>
                    <li className='px-3 hover:underline hover:text-[blue]'>
                       <button><Link href="/">Home</Link></button>
                    </li>
                    <li className='px-3 hover:underline hover:text-[blue]'>
                    <button><Link href="/favorite">Favorite</Link></button>
                    </li>
                    <li className='px-3 hover:underline hover:text-[blue]'>
                    <button>About</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header