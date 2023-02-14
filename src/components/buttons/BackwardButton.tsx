import React from 'react'
interface IProps {
    onClickHandler: ()=> void;
}


const BackwardButton = (props: IProps) => {
    const { onClickHandler} = props;
    return (
        <button className='p-2 rounded-lg shadow-gray-200 shadow-md border  bg-white text-gray-500' onClick={onClickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
    )
}

export default BackwardButton