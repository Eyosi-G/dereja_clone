import { skipToken } from '@reduxjs/toolkit/dist/query'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CompanyItem from '../components/CompanyItem'
import Footer from '../components/Footer'
import Header from '../components/Header'
import JobDetailDescription from '../components/JobDetailDescription'
import LoadingModal from '../components/LoadingModal'
import NavBar from '../components/NavBar'
import { useGetSingleJobQuery } from '../redux/service/jobs'
import JobCard from "../components/JobCard"
import useSlideHook from '../hooks/slide-hook'
import BackwardButton from '../components/buttons/BackwardButton'
import ForwardButton from '../components/buttons/ForwardButton'
import Carousel from '../components/carousel/Carousel'

const JobDetailPage = () => {
  const { slug } = useParams()
  const { isFetching, isSuccess, data } = useGetSingleJobQuery(slug ? slug : skipToken)

  const [length, setLength] = useState(4)
  const { currentIndex, show, next, prev } = useSlideHook({
    length, sizes: [
      {
        show: 4,
        sizeRange: 'width > 1024'
      },
      {
        show: 3,
        sizeRange: 'width > 768 && width < 1024'
      },
      {
        show: 2,
        sizeRange: 'width > 640 && width < 768'
      },
      {
        show: 1,
        sizeRange: 'width < 640'
      }
    ]
  })

  useEffect(() => {
    if (isSuccess && data.similarJobs) {
      setLength(data.similarJobs.length)
    }
  }, [data, isSuccess])


  return (
    <div className='bg-[#fcf7f0] relative'>
      {isFetching && <LoadingModal open={true} />}
      <div className='relative z-20 hidden'>
        <NavBar />
        <Header />
      </div>
      <>
        <div className='min-h-[300px]'>
          <div className='relative '>
            <img className='absolute z-10 -top-48 ' src="/images/bg_top.png" />
          </div>
          {
            isSuccess && <div className=' md:mx-10 lg:mx-32 lg:my-10 z-20 relative p-5 md:p-10 text-[#4d4d4d]'>
              <JobDetailDescription job={data.data} />
              <div className='flex flex-col md:flex-row mt-5 items-center md:items-stretch'>
                <h1 className='text-2xl md:text-4xl text-[#4d4d4d] font-bold text-center md:text-start'>Similar Jobs</h1>
                <div className='flex items-center md:ml-14 space-x-2'>
                  <BackwardButton onClickHandler={prev} />
                  <ForwardButton onClickHandler={next} />
                </div>
              </div>
              <div className='mt-5'>
                <Carousel currentIndex={currentIndex} show={show}>
                  {data.similarJobs.map(job => {
                    return <JobCard job={job} />
                  })}
                </Carousel>
              </div>
            </div>
          }
        </div>
        <Footer />
      </>
    </div>
  )
}

export default JobDetailPage