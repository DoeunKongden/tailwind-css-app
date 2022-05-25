import React from 'react'
import SupportImage from '../assets/support.jpg'
import { AnimationWrapper } from 'react-hover-animation'

function Support() {




  return (
    <div name="Support" className='w-full mt-14'>
      {/* background section  */}
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' alt='' src={SupportImage} />
      </div>

      {/* Letter section */}
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-center text-[40px] text-slate-400'>Support</h2>
          <h3 className='text-center text-5xl py-6 font-bold'>Finding the right team</h3>
          <p className='text-center text-3xl text-slate-300 py-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
        </div>
        <div name="White board and icon" className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8  gap-y-16 px-4 pt-12 sm:pt-20 text-black '>

          <AnimationWrapper>
            <div id='Card' className='h-[400px]  relative bg-white rounded-xl shadow-2xl'>
              <div className='p-8'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                  stroke='currentColor' aria-hidden='true' className='w-16 p-4 
              bg-cyan-400 text-white rounded-lg mt-[-4rem]'>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                  </path>
                </svg>
                <h3 className='font-bold text-2xl my-10'>Sales</h3>
                <p className='text-gray text-xl pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem</p>
              </div>
              <div className='bg-slate-100 pl-8  py-4'>
                <p className='flex items-center text-cyan-400'>
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="w-5 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </p>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div id='Card' className='h-[400px]  relative bg-white rounded-xl shadow-2xl'>
              <div className='p-8'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'
                  stroke='currentColor' aria-hidden='true' className='w-16 p-4 
              bg-cyan-400 text-white rounded-lg mt-[-4rem]'>
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd">

                  </path>
                </svg>
                <h3 className='font-bold text-2xl my-10'>Technical Support</h3>
                <p className='text-gray text-xl pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem</p>
              </div>
              <div className='bg-slate-100 pl-8  py-4'>
                <p className='flex items-center text-cyan-400'>
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="w-5 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </p>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div id='Card' className='h-[400px]  relative  bg-white rounded-xl shadow-2xl'>
              <div className='p-8'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'
                  stroke='currentColor' aria-hidden='true' className='w-16 p-4 
              bg-cyan-400 text-white rounded-lg mt-[-4rem]'>
                  <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd">

                  </path>
                </svg>
                <h3 className='font-bold text-2xl my-10'>Media Query</h3>
                <p className='text-gray text-xl pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem</p>
              </div>
              <div className='bg-slate-100 pl-8  py-4'>
                <p className='flex items-center text-cyan-400'>
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="w-5 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </p>
              </div>
            </div>
          </AnimationWrapper>

        </div>
      </div>
    </div>
  )
}

export default Support