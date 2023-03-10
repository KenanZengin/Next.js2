import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItems from './ProjectItems'


const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
               <ProjectItems title='Property Finder' backgrountImg={'/../public/assets/projects/property.jpg'} projectUrl='/property'/>
               <ProjectItems title='Netflix App' backgrountImg={'/../public/assets/projects/netflix.jpg'} projectUrl='/property'/>
               <ProjectItems title='Crypto App' backgrountImg={'/../public/assets/projects/crypto.jpg'} projectUrl='/property'/>
               <ProjectItems title='Twitch App' backgrountImg={'/../public/assets/projects/twitch.jpg'} projectUrl='/property'/>
            </div>
        </div>

    </div>
  )
}

export default Projects