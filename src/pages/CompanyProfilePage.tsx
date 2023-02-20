import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BackwardButton from '../components/buttons/BackwardButton'
import ForwardButton from '../components/buttons/ForwardButton'
import Carousel from '../components/carousel/Carousel'
import useSlideHook from '../hooks/slide-hook'
import parse from 'html-react-parser';
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import MenuItem from '../components/MenuItem'

const CompanyProfilePage = () => {

  const [length, setLength] = useState(4)
  const { currentIndex, show, next, prev } = useSlideHook({
    length, sizes: [
      {
        show: 3,
        sizeRange: 'width > 1024'
      },
      {
        show: 2,
        sizeRange: 'width > 768 && width < 1024'
      },
      {
        show: 1,
        sizeRange: 'width < 768'
      }
    ]
  })

  const linkStyleClassName = 'capitalize hover:font-bold hover:cursor-pointer'

  return (
    <div>
      <div className='w-full h-[400px] relative z-10'>
        <img className=' w-full h-full object-cover ' src="https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/brand/3/cover/1TSGcyipDO4pOmtllSs1WdCyhTSWzfgBnXTEoAKV.jpeg" />
        <div className="absolute mix-blend-multiply  top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#8aa2f9] to-[#f26427]" />
        <div className='absolute top-0 w-full hidden md:block'>
          <div className='flex justify-between items-center py-4 px-24 '>
            <img src="https://www.dereja.com/_nuxt/img/Logo.8dc33b3.svg" />
            <div className='flex space-x-5 text-white'>
              <div className=''></div>
              <NavLink to="/jobs" className={linkStyleClassName}>jobs</NavLink>
              <NavLink to="/companies" className={linkStyleClassName}>companies</NavLink>
              <NavLink to="/events" className={linkStyleClassName}>events</NavLink>
              <NavLink to="/courses" className={linkStyleClassName}>courses</NavLink>
              <NavLink to="/news" className={linkStyleClassName}>articles</NavLink>
              <NavLink to="/courses" className={linkStyleClassName}>courses</NavLink>
              <div className={linkStyleClassName}>about us</div>
            </div>
          </div>
          <div className='flex justify-end items-center py-3 px-24 '>
            <div className='space-x-2'>
              <button className='bg-white text-[#d22464] px-6 py-2 rounded-lg font-bold'>Login</button>
              <button className='text-white bg-[#d22464] px-6 py-2 rounded-lg font-bold border-2'>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='absolute top-10 left-10 right-10 md:static'>
          <div className='md:mx-32 flex flex-col  md:flex-row relative items-center md:items-stretch  md:-top-[80px] z-50 '>
            <div className='bg-white shadow-lg  h-[160px] flex justify-center items-center rounded-lg p-10 '>
              <img className='max-h-full max-w-full' src='https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/company_logo/6/cU8reKByetoZNrWlkxx7dpPuB3afSYIBIHRctv5F.jpeg' />
            </div>
            <div className='p-5 md:p-0 flex flex-col mt-4 md:mt-0 md:ml-10 text-white items-center md:items-stretch'>
              <h1 className='text-2xl md:text-3xl font-bold capitalize '>Unilever</h1>
              <div className='flex items-center space-x-3 mt-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p>Addis Abeba, Ethiopia</p>
              </div>
              <div className='grow' />
              <div className='font-bold md:font-normal md:text-[#4d4d4d] space-x-10 flex items-center'>
                <span>About</span>
                <span>Video</span>
                <span>Gallary</span>
              </div>
            </div>
          </div>
        </div>
        <section className='flex flex-col items-center md:items-stretch md:flex-row md:mx-32 mt-10 md:mt-0 p-5 md:p-0'>
          <img className='max-w-[348px] w-[70%] md:w-[32%]' src='https://www.dereja.com/_nuxt/img/about-us.55fd422.png' />
          <div className='md:ml-32 mt-5 md:mt-0'>
            <h1 className='text-2xl md:text-4xl text-[#4d4d4d] font-bold text-center md:text-start'>About Us</h1>
            <p className='text-sm mt-5 md:mt-10 '>We’ve been pioneers, innovators and future-makers for over 120 years.The success we’ve achieved means that, today, 2.5 billion people will use our products to feel good, look good and get more out of life.

              Our brands give us a unique opportunity to create positive change, to grow our business, and to achieve our purpose of making sustainable living commonplace.

              2.5 billion people use our products each day
              400+ Unilever brands are used by consumers worldwide
              190 Countries in which our brands are sold
              155,000 Unilever people deliver our success
              €52 billion Our turnover in 2019
            </p>
          </div>
        </section>
        <section className='flex items-center md:items-stretch flex-col-reverse md:flex-row bg-[#fcf7f0] mt-10 md:px-32 p-10' >
          <div className='md:mr-32 mt-5 md:mt-0'>
            <h1 className='text-2xl md:text-4xl text-[#4d4d4d] font-bold  text-center md:text-start'>Why work for us?</h1>
            <p className='mt-5 md:mt-10 text-sm'>Unilever’s reputation for doing business with integrity and with respect for the interests of those our activities can affect is an asset, just as real as our people and brands. Our first priority is to be a successful business: that means investing for growth and balancing short term and long term interests. It also means caring about our consumers, employees and shareholders, our business partners and the world in which we live.
              To succeed requires the highest standards of behavior from all of us. We want our Code of Business Principles, related Code Policies and third party compliance programme to have a positive impact in day-to-day business: each one of us must uphold these at all times.
            </p>
          </div>
          <img className='max-w-[348px] w-full md:w-[32%]' src='https://www.dereja.com/_nuxt/img/about-us.604838c.png' />
        </section>
        <section className='mt-10 md:px-32 p-5 md:p-10' >
          <div className='flex flex-col md:flex-row justify-between items-center md:items-stretch'>
            <h1 className='text-2xl md:text-4xl text-[#4d4d4d] font-bold text-center md:text-start'>Company picture gallery</h1>
            <div className='flex items-center md:ml-14 space-x-2'>
              <BackwardButton onClickHandler={prev} />
              <ForwardButton onClickHandler={next} />
            </div>
          </div>
          <div className='mt-10'>
            <Carousel currentIndex={currentIndex} show={show}>
              <img className='rounded-md' src="https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/brand/3/gallery/RhG5rbg1LUbTFyuGRKhRYG0Dlcx6xw1upRMdqjEZ.jpeg" />
              <img className='rounded-md' src="https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/brand/3/gallery/m8mNf1oCjgG8nNQ7hOlDTVQg9fWgdJpSxwXWoZXF.jpeg" />
              <img className='rounded-md' src="https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public/brand/3/gallery/Ys12Qu9x95BkxHPhFhvdVFsffVPSCHki7o3Szrks.jpeg" />
            </Carousel>
          </div>
        </section>
        <section className='flex s justify-center items-center bg-[#fcf7f0] mt-10 p-5 md:px-32 md:p-10' >
          <div className='bg-white w-full md:w-[80%] my-5 md:my-10 rounded-lg p-5 md:p-10'>
            <h1 className='text-2xl md:text-4xl text-[#4d4d4d] font-bold text-center'>Company Culture</h1>
            <p className='mt-5 md:mt-10 text-xs md:text-sm '>Our Corporate Purpose states that to succeed requires "the highest standards of corporate behavior towards everyone we work with, the communities we touch, and the environment on which we have an impact."
              Our values define how we do business and interact with our colleagues, partners, customers and consumers. Our four core values are integrity, responsibility, respect and pioneering. As we expand into new markets, recruit new talent and face new challenges, these guide our people in the decisions and actions they take every day.
            </p>
          </div>
        </section>
        <section className=' md:mx-32 mt-10 p-5'>
          <h1 className='mb-5 w-full text-2xl md:text-4xl text-[#4d4d4d] font-bold text-center'>Company Video</h1>
          <iframe className='w-full' height="400" src="https://www.youtube.com/embed/FzDqGm7oF2k" ></iframe>
        </section>

        <section className='flex flex-col items-center md:items-start md:flex-row md:mx-32 mt-10 p-5'>
          <div className='text-center relative'>
            <img className='object-cover max-w-full md:max-w-[348px]' style={{ WebkitMaskRepeat: "no-repeat", WebkitMaskSize: "90%", WebkitMaskImage: "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTExIiBoZWlnaHQ9IjUxMSIgdmlld0JveD0iMCAwIDUxMSA1MTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzMS4wMDUgMTU2LjM0MUM1NzUuOTg0IDM2Ni4yMTUgNTIxLjM1IDQ4MS40NjEgMjY3LjEwNSA1MDIuMDc5QzEyLjg1OTMgNTIyLjY5NyAtNTkuNjMwMyA0MTcuNzYgNDkuNjM2MSAxODcuMjY4QzE1OC45MDMgLTQzLjIyMzkgMjg2LjAyNiAtNTMuNTMyOCA0MzEuMDA1IDE1Ni4zNDFaIiBmaWxsPSIjNEQ0RDREIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTExIiBoZWlnaHQ9IjUxMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=)" }} src='https://www.dereja.com/_nuxt/img/why-for-us.2d8fe2e.png' />
            <img className='absolute w-[20%] top-10 right-9 md:right-20' src="https://www.dereja.com/_nuxt/img/ring.ccce1da.png" />
          </div>
          <div className='md:ml-32'>
            <h1 className='text-2xl md:text-4xl text-[#4d4d4d] font-bold text-center md:text-start'>Developing young Talent</h1>
            <p className='text-sm mt-5 md:mt-10  '>Our Future Leaders Programme will ignite the leader in you. This unique programme is designed to develop Unilever’s Future Leaders (UFL) by providing challenging and purposeful opportunities that accelerate their readiness to take on business leadership roles. The programme encompasses rotations within and across functions in an accelerated learning environment. This includes extended leadership contact, formal training and professional development. Create your own journey through experiences, explore your potential, and join us to shape the future.</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default CompanyProfilePage