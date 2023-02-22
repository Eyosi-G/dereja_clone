import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState("")

    return (
        <form onSubmit={() => {
            navigate({
                pathname: "/jobs",
                search: `?s=${keyword}`,
            })
        }} className='flex items-center space-x-2 rounded-lg p-2 bg-white max-w-[400px]'>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" className='outline-none grow' placeholder='Search' />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </form>
    )
}

export default Search