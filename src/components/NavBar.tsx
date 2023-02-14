import React from 'react'
import Header from './Header'
import MenuItem from './MenuItem'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center py-4 px-24'>
            <img src="/images/logo.svg" />
            <div className='flex space-x-5 text-gray-500'>
                <MenuItem name='jobs' path='jobs' />
                <MenuItem name='companies' path='companies' />
                <MenuItem name='events' path='events' />
                <MenuItem name='courses' path='courses' />
                <MenuItem name='articles' path='news' />
                <div className='capitalize'>about us</div>
            </div>
        </div>
    )
}

export default NavBar