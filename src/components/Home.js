import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
         Nikshay Lalla
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          <ul>
          <li className= 'text-center font-bold text-xl text-[#ccd6f6]'>C# developer • Java developer • Web developer </li>
          </ul>
          I’m a Software developer wanting to speacialize in Web development and front-end design, I have created this website to showcase my 
          skills and experience. I am pasionate about programming and simply enjoy a challenge, I'm flexible and able to adapt to my environment
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home