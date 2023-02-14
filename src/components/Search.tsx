import React from 'react'

const Search = () => {
    return (
        <div className='flex items-center space-x-2 rounded-lg p-2 bg-white w-5/12'>
            <input type="text" className='outline-none grow' placeholder='Search' />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    )
}

export default Search