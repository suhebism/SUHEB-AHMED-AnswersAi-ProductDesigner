import React from 'react'
import Image from 'next/image'
const Button = ({text, img}) => {
  return (
    <div className='hover:bg-[#6669F1] text-white w-44 h-8 border-[#6669F1] border-[1px] rounded-md cursor-pointer bg-[#6668f13d] transition-all duration-100 flex items-center justify-center text-center'>
      
      {text}
    </div>
  )
}

export default Button
