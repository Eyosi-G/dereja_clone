import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
    return (
        <div className='pt-36 bg-[#fcf7f0]'>
            <NavBar />
            {/* <div className='relative'>
                <img className='absolute -z-10 -top-48 ' src="/images/bg_top.png" />
                <div className='absolute'>
                    <Outlet />
                </div>
            </div> */}
        </div>
    )
}

export default Layout