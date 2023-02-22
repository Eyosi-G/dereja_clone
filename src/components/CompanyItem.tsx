import React from 'react'
import { ICompany } from '../redux/service/company'
import Button from './buttons/Button'
import moment  from 'moment'
import { useNavigate } from 'react-router-dom';
interface IProps {
    company: ICompany;
}
const CompanyItem = (props: IProps) => {
    const { company } = props;
    const navigate = useNavigate()
    return (
        <div className='flex bg-white rounded-lg'>
            <div className='w-1/5 flex-shrink-0 flex items-center h-[130px] '>
                <img className='max-h-full max-w-full flex-shrink-0 object-cover' src={`https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/${company.logo}`} />
            </div>
            <div className='w-4/5 p-2'>
                <h1 className='text-[#4d4d4d] text-lg capitalize'>{company.name}</h1>
                <div className='flex justify-between items-center my-2'>
                    <div>
                        <p className='text-gray-500 text-sm'>{moment(company.created_at).fromNow()}</p>
                        <p className='text-gray-500 text-sm'>{company.sector.name}</p>
                    </div>
                    <button onClick={() => { navigate(`/companies/${company.id}`)}} className='text-sm px-3 md:text-base md:px-5 py-2 rounded-lg text-white capitalize bg-gradient-to-r from-[#de9844] to-[#d22464] hover:from-[#d22464] hover:to-[#d22464] whitespace-nowrap'>View Profile</button>
                </div>
                <p className='line-clamp-2 text-sm text-[#4d4d4d]'>MuluG Health Services as mention in it's name it's a health service provider which focuses on tele medicine and house call programs which are patient-centered care for our patient where presence at our health facility is not possible or unwanted.In addition MuluG Health Services provides , consulting and trainings, NICU, pharmacy, imaging, laboratory services.</p>
            </div>
        </div>
    )
}

export default CompanyItem