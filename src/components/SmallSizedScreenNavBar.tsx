import React from 'react'
import Search from './Search'
import MenuItem from './MenuItem'
import useComponentVisible from '../hooks/useComponentVisible'

const SmallSizedScreenNavBar = () => {
    const { isComponentVisible, ref, setIsComponentVisible } = useComponentVisible({ initialIsVisible: false })
    return (
        <div className='md:hidden grid grid-cols-4 relative text-[#4d4d4d] text-sm shadow-md'>
            <button onClick={() => setIsComponentVisible(!isComponentVisible)} className='bg-gradient-to-r from-[#ffa352] to-[#ff5d53] text-white flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </button>
            <input type="text" className='outline-none col-span-3 p-3' placeholder='Search' />
            <div ref={ref}>
                {isComponentVisible && <div className='absolute top-10  left-5 min-w-[200px] right-[40%] ' style={{ zIndex: 2000 }} >
                    <div className='flex justify-between px-10 py-3 bg-white rounded-lg'>
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                    <div className='h-[2px] bg-transparent w-full' />
                    <div className='flex flex-col space-y-3 text-gray-500 p-5 bg-white rounded-lg shadow-lg'>
                        <MenuItem name='home' path='/' />
                        <MenuItem name='jobs' path='/jobs' />
                        <MenuItem name='companies' path='/companies' />
                        {/* <MenuItem name='events' path='/events' /> */}
                        {/* <MenuItem name='courses' path='/courses' /> */}
                        <MenuItem name='articles' path='/news' />
                        <div className='capitalize'>about us</div>
                    </div>

                </div>}
            </div>

        </div>
    )
}

export default SmallSizedScreenNavBar