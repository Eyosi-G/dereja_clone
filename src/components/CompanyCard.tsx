import React from 'react'

const CompanyCard = () => {
    return (
        <div className='bg-white'>
            <div className='relative'>
                <div className='h-[200px] w-full flex justify-center'>
                    <img className='h-full' src="https://www.dereja.com/_nuxt/img/vacancy-default-img.c1c3643.png" />
                </div>
                <div className='absolute top-[165px] rounded-sm shadow-lg w-[110px] h-[70px] bg-white  flex justify-center items-center'>
                    <img className='max-h-[50px] max-w-[50px]' src="https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/company_logo/35330/A3hIOsV7FfAxIRCrkDXpBkx6fpGQqoA8MfkTGcOf.jpeg" />
                </div>
            </div>
            <div className='mt-12 p-5 text-[#4d4d4d] space-y-4'>
                <p className='text-xl font-bold capitalize'>ICRC</p>
                <p className='text-sm capitalize'>International aid</p>
                <div className='flex items-center space-x-2 text-sm '>
                    <img src="https://www.dereja.com/_nuxt/img/pin.d299d59.svg" />
                    <p>Around Megenagna Egziabherab Church</p>
                </div>
                <button className='px-5 py-2 rounded-md border-2 border-[#e26300] text-[#e26300]'>Visit Profile</button>
            </div>
        </div>
    )
}

export default CompanyCard