import React, { useState } from 'react'
import CompanyItem from '../components/CompanyItem';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingModal from '../components/LoadingModal';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import SmallSizedScreenNavBar from '../components/SmallSizedScreenNavBar';
import { useGetCompaniesQuery } from '../redux/service/company';

const CompaniesPage = () => {
    const [page, setPage] = useState(0)
    const { isFetching, data, isSuccess } = useGetCompaniesQuery(page + 1)
    return (
        <div className='bg-[#fcf7f0] relative'>
            {isFetching && <LoadingModal open={true} />}
            <div className='relative z-50'>
                <SmallSizedScreenNavBar />
                <NavBar />
                <Header />
            </div>
            {isSuccess && <>
                <div className='min-h-[300px] '>
                    <div className='relative '>
                        <img className='absolute z-10 -top-48 ' src="https://www.dereja.com/_nuxt/img/bg_top.95ccfa7.png" />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-24 pt-10 relative z-20 gap-4'>
                        {data.data.map(company => {
                            return <CompanyItem company={company} />
                        })}
                    </div>
                    <div className='my-10 w-full flex justify-center'>
                        <Pagination page={page} total={data.total} selectPage={(newPage) => setPage(newPage)} />
                    </div>

                </div>
                <Footer />
            </>
            }
        </div>
    )
}

export default CompaniesPage