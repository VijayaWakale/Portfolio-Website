import React from 'react'
import avatarImg from "../../assets/images/ai-generated-8664787_1280.webp"
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3*1 md:text-6*1 font-bold flex leading-normal tracking-tighter' ><TextChange/></h1>
         <p className='text-sm md:text-2*1 tracking-tight'>I am pursuing MCA ENGG from Shivaji University Kolhapur. I have done in Bachelor Of Computer Science. My Bachelor's Score is 81.2 and Cgpa Score is 8.9 Ihave successfully completed Full Stack Web-Development Course by apna college co-founder by Shrddha Khapara</p>
         <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3*1 bg-[#465697]'>Contact Me</button>
        </div>
        <div><img className="w-2/5" src={avatarImg} alt="" /></div>
    </div>
  ) 
}

export default Home;