import React from 'react'
import BackwardButton from './buttons/BackwardButton'
import Button from './buttons/Button'
import ForwardButton from './buttons/ForwardButton'
import CompanyCard from './CompanyCard'

const FeaturedCompanies = () => {
  return (
    <div className='px-24  pt-20 pb-10 bg-gray-100'>
      <div className='flex items-center'>
        <div className='text-3xl font-bold grow'>Featured Companies</div>
        <div>
          <Button onClickHandler={() => { }} text="View All Companies" />
        </div>
        <div className='flex items-center ml-14 space-x-2'>
          <BackwardButton onClickHandler={() => { }} />
          <ForwardButton onClickHandler={() => { }} />
        </div>
      </div>
      <div className='grid grid-cols-4 mt-5 gap-4'>
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  )
}

export default FeaturedCompanies