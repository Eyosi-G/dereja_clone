import moment from 'moment';
import React from 'react'
import ReactQuill from 'react-quill';
import { IJob } from '../redux/service/jobs'
import Button from './buttons/Button'
import 'react-quill/dist/quill.bubble.css';
import { imageUrl } from '../redux/common';

interface IProps {
    job: IJob;
}
const JobDetailDescription = (props: IProps) => {
    const { job } = props;
    const image = "https://www.dereja.com/_nuxt/img/vacancy-main.60274d9.png"

    const imageUrlBuilder = () => {
        if (!job.cover) {
            console.log("nul")
            return null
        }
        if (job.cover.includes("http")) {
            return job.cover;
        }
        return `${imageUrl}/${job.cover}`
    }

    return (
        <div className='bg-white rounded-lg '>
            <div className='relative flex flex-col items-center md:grid grid-cols-4 p-5 space-y-3 md:space-y-0 ' >
                <div className='col-span-2 block md:flex  justify-center'>
                    <div className='md:h-[80px] flex justify-center items-center p-2'>
                        <img className='max-h-full max-w-full ' src={imageUrlBuilder() || image} />
                    </div>
                    <div className='text-[#4d4d4d] flex flex-row  md:flex-col justify-around'>
                        <h1 className='font-bold'>{job.company_name}</h1>
                        <p className='ml-2 md:ml-0 text-gray-500'>{moment(job.published_at).fromNow()}</p>
                    </div>
                </div>
                <div className='col-span-1 md:border-l-2 flex justify-center items-center space-x-5'>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNjE1MzkgMEg3LjIxMTU0QzQuNTE5MjMgMCAyLjc2OTIzIDEuODM4NzEgMi43NjkyMyA0LjY4NTc1VjYuODQwNzlIMC4zODQ2MTVDMC4xNzMwNzcgNi44NDA3OSAwIDcuMDE4NzMgMCA3LjIzNjIxVjEwLjM2QzAgMTAuNTc3NSAwLjE3MzA3NyAxMC43NTU1IDAuMzg0NjE1IDEwLjc1NTVIMi43ODg0NlYxOC42NDQxQzIuNzg4NDYgMTguODYxNiAyLjk2MTU0IDE5LjAzOTUgMy4xNzMwOCAxOS4wMzk1SDYuMzI2OTJDNi41Mzg0NiAxOS4wMzk1IDYuNzExNTQgMTguODYxNiA2LjcxMTU0IDE4LjY0NDFWMTAuNzM1N0g5LjUzODQ2QzkuNzUgMTAuNzM1NyA5LjkyMzA4IDEwLjU1NzggOS45MjMwOCAxMC4zNDAzVjcuMjE2NDRDOS45MjMwOCA3LjExNzU5IDkuODg0NjIgNy4wMTg3MyA5LjgwNzY5IDYuOTM5NjVDOS43MzA3NyA2Ljg2MDU2IDkuNjM0NjEgNi44MjEwMiA5LjUzODQ2IDYuODIxMDJINi42OTIzMVY1LjAwMjA4QzYuNjkyMzEgNC4xMzIxNSA2LjkwMzg1IDMuNjc3NDIgOCAzLjY3NzQySDkuNjE1MzlDOS44MjY5MiAzLjY3NzQyIDEwIDMuNDk5NDggMTAgMy4yODJWMC4zOTU0MjJDMTAgMC4xNzc5NCA5LjgyNjkyIDAgOS42MTUzOSAwWiIgZmlsbD0iIzRENEQ0RCIvPgo8L3N2Zz4K" />
                    <img src="https://www.dereja.com/_nuxt/img/twitter-vector.ae4d4f9.svg" />
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xOC45OTUgMTlWMTguOTk5MkgxOC45OTk4VjEyLjAzMUMxOC45OTk4IDguNjIyMDUgMTguMjY1OSA1Ljk5NjA5IDE0LjI4MDYgNS45OTYwOUMxMi4zNjQ4IDUuOTk2MDkgMTEuMDc5MSA3LjA0NzQzIDEwLjU1NDMgOC4wNDQxNEgxMC40OTg4VjYuMzE0MzRINi43MjAyMVYxOC45OTkySDEwLjY1NDhWMTIuNzE4MUMxMC42NTQ4IDExLjA2NDMgMTAuOTY4MyA5LjQ2NTE4IDEzLjAxNjMgOS40NjUxOEMxNS4wMzQzIDkuNDY1MTggMTUuMDY0NCAxMS4zNTI1IDE1LjA2NDQgMTIuODI0MlYxOUgxOC45OTVaIiBmaWxsPSIjNEQ0RDREIi8+CjxwYXRoIGQ9Ik0wLjMxMzQ3NyA2LjMxNTE5SDQuMjUyODFWMTkuMDAwMUgwLjMxMzQ3N1Y2LjMxNTE5WiIgZmlsbD0iIzRENEQ0RCIvPgo8cGF0aCBkPSJNMi4yODE1OCAwQzEuMDIyMDQgMCAwIDEuMDIyMDQgMCAyLjI4MTU4QzAgMy41NDExMyAxLjAyMjA0IDQuNTg0NTQgMi4yODE1OCA0LjU4NDU0QzMuNTQxMTMgNC41ODQ1NCA0LjU2MzE3IDMuNTQxMTMgNC41NjMxNyAyLjI4MTU4QzQuNTYyMzggMS4wMjIwNCAzLjU0MDMzIDAgMi4yODE1OCAwVjBaIiBmaWxsPSIjNEQ0RDREIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==" />
                </div>
                <div className='col-span-1 md:border-l-2 flex justify-center items-center'>
                    <Button text='Apply' onClickHandler={() => { }} />
                </div>
                <div className='absolute bg-[#d22464] text-white px-7 py-2 rounded-r-md -left-5 top-14 font-thin shadow-lg '>Dereja</div>
            </div>
            <div className='space-y-3 md:space-y-0 md:grid grid-cols-2 mt-5 shadow-md  p-5 border'>
                <div className='pl-5'>
                    <h1 className='font-bold'>{job.name}</h1>
                    <ul className='flex text-gray-500 list-disc'>
                        <li className='mx-5'>{job.job_requests_count} applicants</li>
                        <li className='mx-5'>Associate</li>
                    </ul>
                </div>
                <div className='md:border-l-2 pl-5'>
                    <h1 className='font-bold'>Job Category</h1>
                    <ul className='text-gray-500 list-disc'>
                        <li className='mx-5'>{job.categories[0].name}</li>
                    </ul>
                </div>
            </div>
            <div className='mt-10 px-10 py-5 space-y-10'>
                <div>
                    <h1 className='font-bold'>Expiration date</h1>
                    <div className='text-[#730626]'>{moment(job.deadline).format("LL")}</div>
                </div>
                <div className='text-justify'>
                    <h1 className='font-bold'>Requirements</h1>
                    <p className='text-sm text-gray-500 '>
                        <ReactQuill value={job.requirements} readOnly theme='bubble' />
                    </p>
                </div>
                <div>
                    <h1 className='font-bold'>Details</h1>
                    <p className='text-sm text-gray-500'>
                        <ReactQuill value={job.description} readOnly theme='bubble' />
                    </p>
                </div>


            </div>
            <div className='flex justify-center items-center p-10'><Button text='Apply' onClickHandler={() => { }} /></div>
        </div>
    )
}

export default JobDetailDescription