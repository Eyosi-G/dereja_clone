import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'

const names = ["jobs", "companies", "courses", "events"]

const Hero = () => {
    const [selected, setSelected] = useState(names[0])
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState("")

    return (
        <div className='h-[440px] overflow-hidden relative'>
            <img src='https://www.dereja.com/_nuxt/img/mastercard_white.5b04947.png' className='absolute bottom-10 right-32 z-40' />
            <img src='https://www.dereja.com/_nuxt/img/first_section_bg.fdff246.png' className='absolute h-full w-full object-cover object-left-top' />
            <div className='absolute left-10 md:left-auto right-10 md:right-24 top-10'>
                <div className='hidden md:flex justify-end space-x-2 '>
                    <button className='bg-white text-[#d22464] px-6 py-2 rounded-lg font-bold'>Login</button>
                    <button className='text-white px-6 py-2 rounded-lg font-bold border-2'>Sign Up</button>
                </div>
                <h1 className='text-3xl md:text-5xl mt-10 mr-24 text-white tracking-wider font-bold'>Find your Next step</h1>
                <div className='flex space-x-5 mt-5'>
                    {names.map(name => {
                        return <div onClick={() => setSelected(name)} className={`capitalize text-sm hover:cursor-pointer ${name === selected ? "text-white" : "text-white opacity-50"}`}>{name}</div>
                    })}
                </div>
                <div className='w-full mt-3'>
                    <form onSubmit={(e) => {
                        switch (selected) {
                            case "jobs":
                                navigate({
                                    pathname: "/jobs",
                                    search: `?s=${keyword}`,
                                })
                                break;
                            case "companies":
                                navigate({
                                    pathname: "/companies",
                                    search: `?s=${keyword}`,
                                })
                                break;
                        }

                    }} className='flex items-center space-x-2 rounded-lg p-2 bg-white '>
                        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" className='outline-none grow placeholder:capitalize' placeholder={`Search ${selected}`} />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero