import LogoIcon from '@/icons/LogoIcon'
import React from 'react'

const Header = () => {
  return (
    <div className='h-28 p-4 text-2xl flex justify-center items-center'>      
      <LogoIcon className='my-4 h-[100%] w-[100%]' />
    </div>
  )
}

export default Header