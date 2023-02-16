import React, { useEffect, useState } from 'react'
import useWindowDimensions from './dimension-hook'

interface ISize {
    show: number;
    sizeRange: string;
}
interface IProps {
    length: number
    sizes: ISize[]
}

const useSlideHook = ({ length, sizes }: IProps) => {
    const [show, setShow] = useState(1)
    const { width } = useWindowDimensions()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        sizes.forEach(size => {
            if (eval(size.sizeRange) && show !== size.show) {
                setShow(size.show)
            }
        })

    }, [width])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + show)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - show)
        }
    }


    return {
        prev,
        next,
        currentIndex,
        show
    }
}



export default useSlideHook