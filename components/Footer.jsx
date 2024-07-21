import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import tiktok from '../public/tiktok.png'
import insta from '../public/insta.png'
import fb from '../public/fb.png'

const Footer = () => {
  return (
    <div className='w-full  px-10 flex flex-col justify-between items-center bg-[#000000bf] z-50 backdrop-blur-[2px] gap-5'>
      <Image src={logo} width={200}/>
      <div className='flex w-full items-center justify-between px-20'>
        <div className='w-1/2 flex flex-col gap-4 justify-end ' >
            <div className='flex'>
                <Image width={40} src={tiktok}></Image>
                <Image width={40} src={insta}></Image>
                <Image width={40} src={fb}></Image>
            </div>
            <div className='text-sm font-light' ><span className='text-[#6366F1]'>AnswersAi</span>, Corp. does not condone plagiarism or academic dishonesty. If our services have been misused, we reserve the right to take actions to maintain the integrity of our platform, including but not limited to co-operating with academic institutions and suspending accounts.</div>
        </div>
        <div className='w-1/2 flex gap-6 justify-end'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold'>MORE</h1>
                <p className='font-light text-sm'>Home</p>
                <p className='font-light text-sm'>For Institutions</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold'>STUDENTS</h1>
                <p className='font-light text-sm'>FAQ</p>
                <p className='font-light text-sm'>Contact</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold'>LEGAL</h1>
                <p className='font-light text-sm'>Privacy</p>
                <p className='font-light text-sm'>Terms</p>
                <p className='font-light text-sm'>Policy</p>
            </div>
        </div>
      </div>
      <div className="w-4/5 h-[1px] bg-gradient-to-r from-[#131416] via-slate-600 to-[#131416]"></div>
      <div className='font-extralight text-xs my-6'>© 2024 AnswersAi, Corp. All Rights Reserved.</div>
    </div>
  )
}

export default Footer
