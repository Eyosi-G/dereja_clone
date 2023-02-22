import React, { useEffect, useState } from 'react'
import useSlideHook from '../hooks/slide-hook'
import { useGetCoursesQuery } from '../redux/service/course'
import BackwardButton from './buttons/BackwardButton'
import Button from './buttons/Button'
import ForwardButton from './buttons/ForwardButton'
import Carousel from './carousel/Carousel'
import CourseCard from './CourseCard'

const CourseContainer = () => {
    const { isSuccess, data } = useGetCoursesQuery()

    const [length, setLength] = useState(0)

    const { currentIndex, show, next, prev } = useSlideHook({
        length, sizes: [
            {
                show: 3,
                sizeRange: 'width > 1024'
            },
            {
                show: 2,
                sizeRange: 'width > 768 && width < 1024'
            },
            {
                show: 1,
                sizeRange: 'width < 768'
            }
        ]
    })

    useEffect(() => {
        if (isSuccess) {
            setLength(data.data.length)
        }
    }, [isSuccess])

    console.log("show", show)

    if (!data) return null;
    return (
        <div className='px-5 md:px-24  py-20 bg-[#fcf7f0]'>
            <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center'>
                <div className='text-3xl font-bold grow'>Courses</div>
                <div>
                    <Button onClickHandler={() => { }} text="View All Courses" />
                </div>
                <div className='flex items-center md:ml-14 space-x-2'>
                    <BackwardButton onClickHandler={prev} />
                    <ForwardButton onClickHandler={next} />
                </div>
            </div>
            <div className='mt-5 md:mt-10'>
                <Carousel currentIndex={currentIndex} show={show}>
                    {data.data.map(course => {
                        return <CourseCard course={course} />
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default CourseContainer