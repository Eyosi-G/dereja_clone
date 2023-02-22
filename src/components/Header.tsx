import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <div className='hidden md:flex justify-between items-center py-3 px-24 bg-gradient-to-r from-[#de9844] to-[#d22464] shadow-lg'>
        <Search />
        <div className='space-x-2'>
            <button className='bg-white text-[#d22464] px-6 py-2 rounded-lg font-bold'>Login</button>
            <button className='text-white bg-[#d22464] px-6 py-2 rounded-lg font-bold border-2'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header