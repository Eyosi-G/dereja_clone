import React, { useEffect } from 'react'
import { BarLoader, MoonLoader } from 'react-spinners';

interface IProps {
    open?: boolean
}
const LoadingModal = (props: IProps) => {

    if (!props.open) return null;
    return (
        <div>
            <div className='fixed  bg-white bg-opacity-50 top-0 right-0 left-0 bottom-0 z-40 '  />
            <div className='flex items-center justify-center fixed   top-0 right-0 bottom-0 left-0 z-50 '><BarLoader speedMultiplier={0.75} color="#0436b3" /></div>
        </div>
    )
}

export default LoadingModal