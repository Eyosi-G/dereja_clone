import React from 'react'
import BackwardButton from './buttons/BackwardButton'
import Button from './buttons/Button'
import ForwardButton from './buttons/ForwardButton'
import JobCard from './JobCard'

const FeaturedJobContainer = () => {
  return (
    <div className='px-24  pt-20 bg-[#fcf7f0]'>
      <div className='flex items-center'>
        <div className='text-3xl font-bold grow'>Featured Jobs</div>
        <div>
          <Button onClickHandler={() => { }} text="View All Jobs" />
        </div>
        <div className='flex items-center ml-20 space-x-2'>
          <BackwardButton onClickHandler={() => { }} />
          <ForwardButton onClickHandler={() => { }} />
        </div>
      </div>
      <div className='grid grid-cols-4 mt-5'>
        <JobCard/>
      </div>
    </div>
  )
}

export default FeaturedJobContainer