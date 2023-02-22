import React, { useState } from 'react'
import BackwardButton from './buttons/BackwardButton'
import ForwardButton from './buttons/ForwardButton'

interface IPartner {
    image: string;
    link: string;
}
const data: IPartner[] = [
    {
        image: "https://www.dereja.com/_nuxt/img/partner4.461570e.png",
        link: ""
    },
    {
        image: "https://www.dereja.com/_nuxt/img/partner5.cfbe48b.png",
        link: ""
    },
    {
        image: "https://www.dereja.com/_nuxt/img/partner3.d3d62c3.png",
        link: ""
    },
    {
        image: "https://www.dereja.com/_nuxt/img/partner1.0a6075b.png",
        link: ""
    },
    {
        image: "https://www.dereja.com/_nuxt/img/partner2.838f500.png",
        link: ""
    }
]
const OurPartners = () => {
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(4)


    return (
        <div className='p-5 md:px-24  pt-20 pb-10 bg-white'>
            <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center'>
                <div className='text-3xl font-bold grow'>Our Partners</div>
                <div className='flex items-center space-x-2'>
                    <BackwardButton onClickHandler={() => {
                        if (startIndex > 0) {
                            const newStartIndex = startIndex - 1 
                            setStartIndex(newStartIndex)
                            setEndIndex(newStartIndex + 4)
                        }
                    }} />
                    <ForwardButton onClickHandler={() => {
                        if (endIndex < data.length ) {
                            const newEndIndex = endIndex + 1;
                            setEndIndex(newEndIndex)
                            setStartIndex(newEndIndex - 4 )
                        }
                    }} />
                </div>
            </div>
            <div className='grid grid-cols-4 mt-5 gap-4'>
                {data.slice(startIndex, endIndex).map(item => {
                    return <img className='w-full flex-shrink-0 object-cover ' src={item.image} />
                })}
            </div>
        </div>
    )
}

export default OurPartners