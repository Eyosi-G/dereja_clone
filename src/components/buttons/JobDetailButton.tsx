import React from 'react'

interface IProps {
    onClickHandler: () => void;
}
const JobDetailButton = (props: IProps) => {
    const { onClickHandler } = props;
    return (
        <button onClick={onClickHandler} className="flex space-x-2 items-center text-[#730626]">
            <p className='capitalize'>view job details</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </button>
    )
}

export default JobDetailButton