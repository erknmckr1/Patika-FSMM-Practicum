import React, { useState } from 'react'
import Logo from '../ui/Logo'
import TextInput from '../ui/TextInput'
import {CiMenuBurger} from 'react-icons/ci'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Header() {
    // mobıl ekranlar menunun acılıp kapanma durumu ıcın olusturdugumuz state
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const router = useRouter();

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <div className='bg-black  h-[5.5rem] fixed z-30 w-full px-3 '>
        <div className='container mx-auto h-full flex items-center justify-between w-full relative'>
            <Logo/>
            {router.asPath === '/' ? <TextInput/> : null}
            <button className='text-white sm:hidden block' onClick={toggleMenu}><CiMenuBurger/></button>
            <nav className={`sm:text-white bg-white sm:bg-transparent w-[100px] h-[100] sm:w-[300px] ${isMenuOpen ? "block" : "hidden"} sm:block sm:static absolute right-0 top-[3.5rem] opacity-80  transition-all duration-500 ease-in-out`}>
                <ul className='flex flex-col sm:flex-row justify-center items-center'>
                    <li className={`${router.asPath === '/' ? 'active' : ""}  px-3 hover:underline hover:text-[blue]`}>
                       <button><Link href="/">Home</Link></button>
                    </li>
                    <li className={`${router.asPath === '/favorite' ? 'active' : ""} px-3 hover:underline hover:text-[blue]`}>
                    <button><Link href="/favorite">Favorite</Link></button>
                    </li>
                    <li className={`${router.asPath === '/about' ? 'active' : ""} px-3 hover:underline hover:text-[blue]`}>
                    <button>About</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header