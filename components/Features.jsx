import React from 'react'
import Image from 'next/image'
import book from '../public/book.png'
const Features = () => {
  return (
    <div className=''>
      <div className='w-[900px] h-[900px] bg-gradient-to-b from-[#4d4e5086] via-[#13141600] to-[#13141600] rounded-full relative flex items-center justify-center'>
        <div className='w-[897px] h-[897px] bg-[#131416] rounded-full flex flex-col gap-20 pt-28 '>
            <div className='flex justify-around'>
                <div className=' flex flex-col items-center justify-center gap-2 w-32 '>
                    <div className='w-[40px] h-[40px]  border-[1px] border-[#6366F1] bg-gradient-radial from-[#6366F1] to-[#131416] flex items-center justify-center rounded-md'>
                        <Image width={20} height={20} src={book} className='absolute h-[20px] w-[20px]'></Image>
                    </div>
                    <h1 className='text-sm '>Talk to book</h1>
                    <p className='text-xs text-center font-light text-[#737475]'>At the end of the year, any
                    balance in manufacturing?</p>
                </div>
                <div className=' flex flex-col items-center justify-center gap-2 w-32 '>
                    <div className='w-[40px] h-[40px]  border-[1px] border-[#6366F1] bg-gradient-radial from-[#6366F1] to-[#131416] flex items-center justify-center rounded-md'>
                        <Image width={20} height={20} src={book} className='absolute h-[20px] w-[20px]'></Image>
                    </div>
                    <h1 className='text-sm '>Talk to book</h1>
                    <p className='text-xs text-center font-light text-[#737475]'>At the end of the year, any
                    balance in manufacturing?</p>
                </div>
                <div className=' flex flex-col items-center justify-center gap-2 w-32 '>
                    <div className='w-[40px] h-[40px]  border-[1px] border-[#6366F1] bg-gradient-radial from-[#6366F1] to-[#131416] flex items-center justify-center rounded-md'>
                        <Image width={20} height={20} src={book} className='absolute h-[20px] w-[20px]'></Image>
                    </div>
                    <h1 className='text-sm '>Talk to book</h1>
                    <p className='text-xs text-center font-light text-[#737475]'>At the end of the year, any
                    balance in manufacturing?</p>
                </div>
            </div>
            <div className='flex justify-around'>
                <div className=' flex flex-col items-center justify-center gap-2 w-32 '>
                    <div className='w-[40px] h-[40px]  border-[1px] border-[#6366F1] bg-gradient-radial from-[#6366F1] to-[#131416] flex items-center justify-center rounded-md'>
                        <Image width={20} height={20} src={book} className='absolute h-[20px] w-[20px]'></Image>
                    </div>
                    <h1 className='text-sm '>Talk to book</h1>
                    <p className='text-xs text-center font-light text-[#737475]'>At the end of the year, any
                    balance in manufacturing?</p>
                </div>
                <div className=' flex flex-col items-center justify-center gap-2 w-32 '>
                    <div className='w-[40px] h-[40px]  border-[1px] border-[#6366F1] bg-gradient-radial from-[#6366F1] to-[#131416] flex items-center justify-center rounded-md'>
                        <Image width={20} height={20} src={book} className='absolute h-[20px] w-[20px]'></Image>
                    </div>
                    <h1 className='text-sm '>Talk to book</h1>
                    <p className='text-xs text-center font-light text-[#737475]'>At the end of the year, any
                    balance in manufacturing?</p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
