import React from 'react'

const Footer = () => {
    return (
        <div className='px-10 py-5 text-white bg-[#730626] text-sm md:text-base '>
            <div className='flex flex-col space-y-5 md:flex-row justify-between mt-5  font-light'>
                <div className='space-y-4 '>
                    <div className='flex items-center space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <div className='flex flex-col'>
                            <a href='tel:+251 96 675 3435'>+251 96 675 3435</a>
                            <a href='tel:+251 97 804 3196'>+251 97 804 3196</a>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <div className='flex flex-col'>
                            <a href='mailto:info@dereja.com'>info@dereja.com</a>
                            <a href='mailto:candidates@dereja.com'>candidates@dereja.com</a>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 '>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <p>Meskel Flower Road, Behind Nazra Hotel.Addis Ababa, Ethiopia</p>
                    </div>
                </div>
                <div>
                    <p className='font-bold'>For candidate & for employers</p>
                    <div className='mt-3 space-y-2 '>
                        <p>Jobs</p>
                        <p>Courses</p>
                        <p>Events</p>
                    </div>
                </div>
                <div>
                    <p className='font-bold'>About</p>
                    <div className='mt-3 space-y-2 '>
                        <p>Know dereja</p>
                        <p>Project partners</p>
                        <p>About Africa Jobs Network</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div>
                    <p className='font-bold'>Supported by</p>
                    <div className='mt-3 space-y-2 '>
                        <img src="https://www.dereja.com/_nuxt/img/mastercard_white.5b04947.png" />
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col md:flex-row space-y-5 justify-between'>
                <div className='text-white'>
                    <img src="https://www.dereja.com/_nuxt/img/Logo.8dc33b3.svg" />
                </div>
                <div className='flex space-x-5'>
                    <img className='w-6' src="https://www.dereja.com/_nuxt/img/facebook-sharing.6625d25.svg" />
                    <img className='w-6' src="https://www.dereja.com/_nuxt/img/twitter-sharing.6e8a29f.svg" />
                    <img className='w-6' src="https://www.dereja.com/_nuxt/img/linkedin-footer.75b13c2.svg" />
                    <img className='w-6' src="https://www.dereja.com/_nuxt/img/youtube.8e9cddf.svg" />

                </div>
                <div className=''>
                    <div className='space-x-10'>
                        <span>Terms of use</span>
                        <span>Privacy policy</span>
                    </div>
                    <div className='text-center'>2023 All right reserved ©</div>
                </div>
            </div>
        </div>
    )
}

export default Footer