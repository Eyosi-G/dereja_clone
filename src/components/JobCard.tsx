import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { IJob } from '../redux/service/jobs'
import DetailButton from './buttons/DetailButton'
import 'react-quill/dist/quill.bubble.css';
import parse from 'html-react-parser';
import { imageUrl } from '../redux/common';
import moment from "moment"

interface IProps {
    job: IJob
}
const JobCard = (props: IProps) => {
    const { job } = props;
    const image = "https://www.dereja.com/_nuxt/img/vacancy-main.60274d9.png"

    const imageUrlBuilder = () => {
        if (!job.cover) {
            return null
        }
        if (job.cover.includes("http")) {
            return job.cover;
        }
        return `${imageUrl}/${job.cover}`
    }
    const formatDate = ()=> {
        if(Date.parse(job.published_at).toString() == 'NaN'){
            const reversed = job.published_at.split("-");
            return moment(`${reversed[2]}-${reversed[1]}-${reversed[0]}`).fromNow()
        }
        return moment(job.published_at).fromNow()
    }
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center h-[60px]'>
                <div className='flex justify-center items-center flex-shrink-0 w-[60px]'>
                    <img src={imageUrlBuilder() || image} className="w-full h-full" />
                </div>
                <h2 className='ml-5 text-[#4d4d4d] capitalize line-clamp-2'>{job.company_name}</h2>
            </div>
            <div className='flex justify-between mt-3'>
                <p className='text-[#d22464] font-bold capitalize truncate'>{job.name}</p>
                <p className='text-sm text-[#730626] whitespace-nowrap'>{moment(job.deadline).format('ll')}</p>
            </div>

            <div className='flex justify-between text-xs text-gray-500'>
                <p>{job.categories[0].name}</p>
                <p className='whitespace-nowrap'>{formatDate()}</p>
            </div>
            <p className='mt-5 line-clamp-4 text-sm text-[#4d4d4d] font-normal ' >
                {parse(job.description)}
            </p>
            <div className='mt-3'>
                <DetailButton text='view job details' onClickHandler={() => { }} />
            </div>
        </div>
    )
}

export default JobCard