
import React, { useEffect, useState } from 'react'

interface IProps {
    children: React.ReactNode[];
    show: number;
    currentIndex: number;
}
const Carousel = (props: IProps) => {
    const { children, show, currentIndex } = props
    return (
        <div className='relative transition-all '>
            <div
                className={`grid grid-cols-${show}  gap-4 `}
            >
                {children.slice(currentIndex, currentIndex + show)}
            </div>
        </div>
    )
}

export default Carousel
