import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../hooks/dimension-hook'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hook'
import { useGetLatestJobsQuery } from '../redux/service/jobs'
import BackwardButton from './buttons/BackwardButton'
import Button from './buttons/Button'
import ForwardButton from './buttons/ForwardButton'
import JobCard from './JobCard'

const FeaturedJobContainer = () => {
  const { isSuccess, data } = useGetLatestJobsQuery()
  const [startIndex, setStartIndex] = useState(0)
  const [size, setSize] = useState(1)
  const [endIndex, setEndIndex] = useState(() => size)
  const { width } = useWindowDimensions()
  useEffect(() => {
    if (width > 1024 && size !== 4) {
      setSize(4)
      setEndIndex(4)
      setStartIndex(0)
      return
    }
    if (width > 768 && width < 1024 && size !== 3) {
      setSize(3)
      setEndIndex(3)
      setStartIndex(0)
      return
    }

    if (width < 768 && size !== 1) {
      setSize(1)
      setEndIndex(1)
      setStartIndex(0)
      return
    }

  }, [width])


  if (!isSuccess) return null;

  return (
    <div className='px-24  pt-20 pb-10 bg-[#fcf7f0] '>
      <div className='flex items-center'>
        <div className='text-3xl font-bold grow'>Featured Jobs</div>
        <div>
          <Button onClickHandler={() => { }} text="View All Jobs" />
        </div>
        <div className='flex items-center ml-14 space-x-2'>
          <BackwardButton onClickHandler={() => {
            if (startIndex === 0) {
              return;
            }
            setEndIndex(startIndex)
            setStartIndex(startIndex - size)

          }} />
          <ForwardButton onClickHandler={() => {
            if (startIndex + size > data.data.length) {
              setStartIndex(0)
              setEndIndex(size)
              return
            }
            setStartIndex(endIndex)
            setEndIndex(endIndex + size)
          }} />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  mt-5 gap-4'>
        {isSuccess && data.data.slice(startIndex, endIndex).map(job => {
          return <JobCard job={job} />
        })}
      </div>
    </div>
  )
}

export default FeaturedJobContainer