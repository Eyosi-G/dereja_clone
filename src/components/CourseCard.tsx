import React from 'react'
import { ICourse } from '../redux/service/course'
import DetailButton from './buttons/DetailButton'

interface IProps {
    course: ICourse;
}
const CourseCard = (props:IProps) => {
    const { course} = props;
    return (
        <div className='bg-white'>
            <div className=''>
                <div className='h-[200px]  flex justify-center'>
                    <img className='h-full w-full object-cover' src={`https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/${course.cover}`} />
                </div>
            </div>
            <div className='mt-5 p-5 text-[#4d4d4d] space-y-4'>
                <p className='text-xl font-bold capitalize text-[#d22464] line-clamp-1'>{course.title}</p>
                <div className='flex items-center  justify-between text-xs text-gray-500 '>
                    <p>Dereja</p>
                    <p>2y</p>
                </div>
                <div className='w-full h-1 bg-gray-300' />
                <DetailButton onClickHandler={()=>{}} text="Continue Course" />
            </div>
        </div>
    )
}

export default CourseCard