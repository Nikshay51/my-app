import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div >
               <h1 className='text-20 font-bold border-b-4 inline border-pink-600'> Personal skills: </h1>
              <li>
               Organised
               </li>
               <li>
               Leader
               </li>
               <li>
               Team Player
               </li>
               <li>
               Ambitious
               </li>
               <li>
               Empathetic
               </li>
             
            </div>
            <div>
            <div >
               <h1 className='text-20 font-bold border-b-4 inline border-pink-600'> Development skills: </h1>
               
              <p> I have studied BCA - Bachelor in Computer Application Development</p>
              <li>
               C#
               </li>
               <li>
                React
               </li>
               <li>
               Java
               </li>
               <li>
               Firebase
               </li>
               <li>
               Android Studio
               </li>
             
            </div> 
            </div>
            <div >
              <p>
                <h1 className='text-20 font-bold border-b-4  border-pink-600'> Why I want to be a developer at SovTech?</h1>
                I wish to gain insight into the company, understand different departments and what they do, this way I can get a chance to 
                specialise and with SovTech this is what I want to gain from the programme.</p> 
                <p>Personal guidance and mentoring, if a senior is assigned to me, I love asking questions to understand every detail and I feel at SovTech this will help me grow and add to my personal growth.</p>
                <p>A stronger CV, this programme will help me to stand out in the job market as SovTech is a very reputable company.</p> 
                I want to work at SovTech as I have always being intrigued by Software Development and the impact it has had on my life. 
                I have also found that I achieve more in a collaborative environment and look forward to work in several departments that align to my goals.
                  
            </div>

            <div>
              <p>
              
                I have a passion towards the companies personal mission and feel as an individual with my skill set can grow in the productive environment and add to the mission of the company and it fits well with my core values. </p>
                I want to gain exposure in this company and be able to make an impact on the company and gain the trust from my co workers over the time. <p>I want my coworkers to see me as part of the team and someone they can rely on. </p>
                My passion for tech extends beyond IT, it has helped me improve my life and others, I was able to use my skills to big about change "Small wins" graduate programme is my opportunity to be a lump of clay and be moulded into the person I want to be. 
                <p>I see myself excelling in this role given my experience level, because I have done similar work in the past and know what it takes.</p>
                   
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;