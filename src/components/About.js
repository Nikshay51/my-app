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
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Nikshay Lalla, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
            <div >
              <p>
                <h1 className='text-20 font-bold border-b-4 border-pink-600'> Why I want to be a developer at SovTech?</h1>
                I wish to gain insight into the company, understand different departments and what they do, this way I can get a chance to 
                specialise and with SovTech this is what I want to gain from the programme. 
                Personal guidance and mentoring, if a senior is assigned to me, I love asking questions to understand every detail and I feel at SovTech this will help me grow and add to my personal growth.
                A stronger CV, this programme will help me to stand out in the job market as SovTech is a very reputable company.
                I want to work at SovTech as I have always being intrigued by Software Development and the impact it has had on my life. 
                I have also found that I achieve more in a collaborative environment and look forward to work in several departments that align to my goals.
                </p>  
            </div>

            <div>
              <p>
              <h1 className='text-20 font-bold border-b-4 border-pink-600'> Continued...</h1>
                I have a passion towards the companies personal mission and feel as an individual with my skill set can grow in the productive environment and add to the mission of the company and it fits well with my core values. 
                I want to gain exposure in this company and be able to make an impact on the company and gain the trust from my co workers over the time. I want my coworkers to see me as part of the team and someone they can rely on. 
                My passion for tech extends beyond IT, it has helped me improve my life and others, I was able to use my skills to big about change "Small wins" graduate programme is my opportunity to be a lump of clay and be moulded into the person I want to be. 
                I see myself excelling in this role given my experience level, because I have done similar work in the past and know what it takes. 
                 </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;