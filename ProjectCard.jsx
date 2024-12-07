import React from 'react'
import bannerImg from "../../assets/images/download.png"

const ProjectCard= ({tittle, main})=>{

return (
    <div className='p-3 md:p-6 flex-col w-80 bg-[#0c0e19] shadow-x1 shadow-slate-900 rounded-2*1'>
        <img className='p-4'  src={bannerImg} alt="" />
        <h3 className='px-4 text-xl md:text-2*1 font-bold leading-normal'>
            {tittle}
        </h3>
        
        <p className='px-4 text-sm ms:text-md leading-tight py-2'>{main}</p>
        <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3*1 bg-[#465697]'>Demo</button>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3*1 bg-[#465697]'>Source Code</button>
        </div>
    </div>
    
  )
}

export default ProjectCard ;