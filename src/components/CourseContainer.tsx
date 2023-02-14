import React from 'react'
import BackwardButton from './buttons/BackwardButton'
import Button from './buttons/Button'
import ForwardButton from './buttons/ForwardButton'
import CourseCard from './CourseCard'

const CourseContainer = () => {
    return (
        <div className='px-24  py-20 bg-[#fcf7f0]'>
            <div className='flex items-center'>
                <div className='text-3xl font-bold grow'>Courses</div>
                <div>
                    <Button onClickHandler={() => { }} text="View All Courses" />
                </div>
                <div className='flex items-center ml-14 space-x-2'>
                    <BackwardButton onClickHandler={() => { }} />
                    <ForwardButton onClickHandler={() => { }} />
                </div>
            </div>
            <div className='grid grid-cols-3 mt-5 gap-4'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

export default CourseContainer