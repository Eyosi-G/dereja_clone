import React from 'react'
import JobDetailButton from './buttons/JobDetailButton'

const JobCard = () => {
    return (
        <div className='bg-white p-4'>
            <div className='flex items-center'>
                <div className='flex justify-center items-center h-[60px] w-[60px]'>
                    <img className='' src="https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/jobs/579/ANQ461In5DbX0wcqXA62z83YvFmNaEZdvmVViBhF.jpeg" />
                </div>
                <h2 className='text-[#4d4d4d] capitalize'>Dubai Training Center</h2>
            </div>
            <div className='flex justify-between mt-3'>
                <p className='text-[#d22464] font-bold capitalize'>Office Assistant</p>
                <p className='text-sm text-[#730626]'>Feb 20, 2023</p>
            </div>

            <div className='flex justify-between text-xs text-gray-500'>
                <p>Secretarial and Clerical, Manufacturing</p>
                <p>18 h</p>
            </div>
            <p className='mt-5 line-clamp-4 text-sm text-[#4d4d4d] '>
                Dubai Training Center focuses on providing education and improving the capabilities of workers who are traveling overseas for employment purposes. At present, the center is in the process of establishing a marketing office and to support this expansion, they are looking to hire a Salesperson. This individual will be responsible for promoting the center's services, identifying new business opportunities and contributing to the growth of the organization.
            </p>
            <div className='mt-3'>
                <JobDetailButton onClickHandler={() => { }} />
            </div>
        </div>
    )
}

export default JobCard