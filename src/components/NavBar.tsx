import React from 'react'
import Header from './Header'
import MenuItem from './MenuItem'


const NavBar = () => {
    return (
        <div className='md:flex justify-between items-center py-4 px-24 bg-white hidden'>
            <img src="https://www.dereja.com/_nuxt/img/Logo-black.7a2b5f8.svg" />
            <div className='flex space-x-5 text-gray-500'>
                <MenuItem name='jobs' path='/jobs' />
                <MenuItem name='companies' path='/companies' />
                {/* <MenuItem name='events' path='/events' /> */}
                {/* <MenuItem name='courses' path='/courses' /> */}
                <MenuItem name='articles' path='/news' />
                <div className='capitalize'>about us</div>
            </div>
        </div>
    )
}

export default NavBar