import React from 'react'
import { ICompany } from '../redux/service/company'

interface IProps {
    company: ICompany;
}
const CompanyCard = (props: IProps) => {
    const { company } = props;
    return (
        <div className='bg-white'>
            <div className='relative'>
                <div className='h-[200px] w-full flex justify-center'>
                    <img className='h-full object-cover' src={!company.brand ? "https://www.dereja.com/_nuxt/img/vacancy-default-img.c1c3643.png" : `https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/${company.brand.cover}`} />
                </div>
                <div className='absolute top-[165px] rounded-sm shadow-lg w-[110px] h-[70px] bg-white  flex justify-center items-center'>
                    <img className='max-h-[50px] max-w-[50px]' src={`https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/${company.logo}`} />
                </div>
            </div>
            <div className='mt-12 p-5 text-[#4d4d4d] space-y-4'>
                <p className='text-lg font-bold capitalize'>{company.name}</p>
                <p className='text-sm capitalize'>{company.sector.name}</p>
                <div className='flex items-center space-x-2 text-sm '>
                    <img src="https://www.dereja.com/_nuxt/img/pin.d299d59.svg" />
                    <p>{company.location}</p>
                </div>
                <button className='px-5 py-2 rounded-md border-2 border-[#e26300] text-[#e26300]'>Visit Profile</button>
            </div>
        </div>
    )
}

export default CompanyCard