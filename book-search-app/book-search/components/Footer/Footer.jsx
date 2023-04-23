import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import Link from 'next/link'
function Footer() {
  return (
    <div className='bottom-0 h-[2.5rem] left-0 bg-black w-full fixed flex justify-center'>
        <div className='text-[20px] w-[5rem] text-[white] flex justify-between items-center'>
        <button className='hover:text-blue-300'><Link target='_blank' href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/   "><BsLinkedin/></Link></button>
        <button className='hover:text-green-300'><Link target='_blank' href="https://github.com/erknmckr1"><BsGithub/></Link></button>
        </div>
        
    </div>
  )
}

export default Footer