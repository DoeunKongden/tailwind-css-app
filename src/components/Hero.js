import React from 'react';
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid';
import pgImg from '../assets/cyber-bg.png'

function Hero() {
  return (
    <div className='w-full  h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-2 '>
          <p className='text-2xl'>Unqiue Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
          <p className='text-2xl'>This is our Tech Brand.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img className='w-full' src={pgImg} alt="Image not found"></img>
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[768px] bottom-[5%]
              mx-1 md:left-1/2 tranform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 text-center
              shadow-xl rounded-xl'>
          <p>Data Services</p>
          <div className='flex justify-between flex-wrap px-4 '>
            <p className='flex px-4 py-2 text-slate-500'>  <CloudUploadIcon className='h-6  text-orange-400' />App Seciroity</p>
            <p className='flex px-4 py-2 text-slate-500'> <DatabaseIcon className='h-6 text-orange-400' />DashBoard</p>
            <p className='flex px-4 py-2 text-slate-500'> <ServerIcon className='h-6 text-orange-400' /> Cloud Data</p>
            <p className='flex px-4 py-2 text-slate-500'> <PaperAirplaneIcon className='h-6 text-orange-400' />API</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero