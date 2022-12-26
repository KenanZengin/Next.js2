import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>//I am not your normal developer</p>
                <p  className='py-2 text-gray-600'>
                    I have spent the las 12 years in the fire service working as a professional firefigter & paramedic. I have always had a knack for technology
                    and working with computers. In 2019 I started working with HTML & CSS to make some minor edits on a small business website that I was operating.
                    What I thought was just a few small edits turned into a love for programing. 
                </p>
                <br />
                <p  className='py-2 text-gray-600'> 
                    Fascinaed with how intricate programming can be I was quickly drawn to learn more. I started learnign javascript and was even more enthused with
                    making websites interactive. I then started freelancing for e-commerce comppanies on the Shopfy platforms. I am now spending my time building 
                    projects with React JS, Firebase and learnign new technology 
                </p>
                <p  className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
               
                   
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="/assets/about.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About