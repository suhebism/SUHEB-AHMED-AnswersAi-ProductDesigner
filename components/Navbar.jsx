import React from 'react'
import Link from 'next/link'
import Button from './Button'
import logo from '../public/logo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='w-full h-16 px-10 flex flex-row justify-between items-center bg-[#000000bf] fixed z-50 backdrop-blur-[2px]'>
      <Image width={150} height={100} className='' src={logo} alt="" />
      <div className='flex items-center justify-center  gap-5'>
        <Link href='/' className='hover:border-[1px] border-[#6669F1] rounded-md px-5 transition-all duration-100 '>Home</Link>
        <Link href='/' className='hover:border-[1px] border-[#6669F1] rounded-md px-5 transition-all duration-100 '>Question Bank</Link>
        <Link href='/' className='hover:border-[1px] border-[#6669F1] rounded-md px-5 transition-all duration-100 '>Institution</Link>
        <Link href='/' className='hover:border-[1px] border-[#6669F1] rounded-md px-5 transition-all duration-100'>FAQ</Link>
      </div>
      <Button text='Sign Up'/>
    </div>
  )
}

export default Navbar
