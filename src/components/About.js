import React from 'react'

function About() {
  return (
    <div className='w-full my-32 '>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>Trusted By Developer Across The World</h2>
          <p className='text-3xl py-6 text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 mt-2'>Completion</p>
          </div>

          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-400 mt-2'>Delivery</p>
          </div>

          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100k</p>
            <p className='text-gray-400 mt-2'>Transaction</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About