import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2*l md:text-4*l text-white font-bold'> Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard tittle="Blogging Website" main="This is a blogging website created in next js and used some componemts in library There are several great blogging sites to choose from when starting a blog. Our top picks include Wix, WordPress, and Blogger. These are at the top of our list as each offers a free plan, ease-of-use blog builder, and other powerful blogging tools"/>
        <ProjectCard tittle="Youtube Clone" main="The icons are based on similar elements, which means that we design an icon element and then copy, paste, and edit it to create the others. The Main body contains two sections (sidebar and content). The navigation links in the sidebar are also similar, so they are just one thing."/>
        <ProjectCard tittle="Netflix Clone" main="The Netflix clone is a customizable streaming platform, empowering you to launch your personalized on-demand video streaming venture. Utilize highly scalable websites and mobile apps to kickstart your business seamlessly."/>
        </div>
    </div>
  )
}

export default Projects ;