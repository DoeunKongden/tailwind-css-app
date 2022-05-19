import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
  const [nav, Setnav] = useState(false); //Right now the nav value is false
  const handleClick = () => Setnav(!nav); //but when the handle click funtion is invoke it will change the flase value of nav 
                                          //back to true becuase false is the opposite is true
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <img className='w-25 h-20 bg-transparent' src='https://pngset.com/images/clip-art-plane-logo-just-random-circle-symbol-trademark-emblem-disk-transparent-png-433318.png'></img>
          <ul className='hidden md:flex  ml-20'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          {!nav? <MenuIcon className='w-6 cursor-pointer'></MenuIcon> : <XIcon className='w-5 cursor-pointer'></XIcon>}  
        </div>
      </div>

      <div>
        <ul className={!nav?'hidden':'absolute bg-zinc-200 w-screen px-8'}>
          <li className='border-b-2 border-zinc-500 w-full'>Home</li>
          <li className='border-b-2 border-zinc-500 w-full'>About</li>
          <li className='border-b-2 border-zinc-500 w-full'>Support</li>
          <li className='border-b-2 border-zinc-500 w-full'>Platforms</li>
          <li className= 'w-full'>Pricing</li>

          <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
          </div>
        </ul>
      </div>

    </div>
  )
}

export default Navbar