import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../hooks/dimension-hook'
import useSlideHook from '../hooks/slide-hook'
import { useGetFeaturedCompaniesQuery } from '../redux/service/company'
import BackwardButton from './buttons/BackwardButton'
import Button from './buttons/Button'
import ForwardButton from './buttons/ForwardButton'
import Carousel from './carousel/Carousel'
import CompanyCard from './CompanyCard'

const FeaturedCompanies = () => {

  const { data, isSuccess } = useGetFeaturedCompaniesQuery()
  const [length, setLength] = useState(0)
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
        show: 1,
        sizeRange: 'width < 768'
      }
    ]
  })

  useEffect(() => {
    if (isSuccess) {
      setLength(data.data.length)
    }
  }, [isSuccess])

  if (!isSuccess) return null;
  return (
    <div className='px-24  pt-20 pb-10 bg-gray-100'>
      <div className='flex items-center'>
        <div className='text-3xl font-bold grow'>Featured Companies</div>
        <div>
          <Button onClickHandler={() => { }} text="View All Companies" />
        </div>
        <div className='flex items-center ml-14 space-x-2'>
          <BackwardButton onClickHandler={prev} />
          <ForwardButton onClickHandler={next} />
        </div>
      </div>
      <div className='mt-10'>
        <Carousel currentIndex={currentIndex} show={show}>
          {data.data.map(company => {
            return <CompanyCard company={company} />
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default FeaturedCompanies