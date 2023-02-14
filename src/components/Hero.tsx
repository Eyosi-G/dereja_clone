import React, { useState } from 'react'
import Search from './Search'

const names = ["jobs", "companies", "courses", "events"]

const Hero = () => {
    const [selected, setSelected] = useState(names[0])
    return (
        <div className='py-2 h-[440px] overflow-hidden relative'>
            <img src='/images/mastercard.png' className='absolute bottom-10 right-32 z-40' />
            <img src='/images/first_section_bg.png' className='absolute h-full w-full object-cover object-left-top' />
            <div className='absolute right-24 top-10'>
                <div className='flex justify-end space-x-2 '>
                    <button className='bg-white text-[#d22464] px-6 py-2 rounded-lg font-bold'>Login</button>
                    <button className='text-white px-6 py-2 rounded-lg font-bold border-2'>Sign Up</button>
                </div>
                <h1 className='text-5xl mt-10 mr-24 text-white tracking-wider font-bold'>Find your Next step</h1>
                <div className='flex space-x-5 mt-5'>
                    {names.map(name => {
                        return <div onClick={() => setSelected(name)} className={`capitalize text-sm hover:cursor-pointer ${name === selected ? "text-white" : "text-white opacity-50"}`}>{name}</div>
                    })}
                </div>
                <div className='w-full mt-3'>
                    <div className='flex items-center space-x-2 rounded-lg p-2 bg-white '>
                        <input type="text" className='outline-none grow placeholder:capitalize' placeholder={`Search ${selected}`} />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero