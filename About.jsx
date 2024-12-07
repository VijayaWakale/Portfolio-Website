import React from 'react';
import AboutImg from "../../assets/images/female.avif";
// import { IoArrowFroward } from "react-icons/io5";
const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2*1 md:text-5*1 font-bold'>About</h2>
            <div className='md:flex flex-wwrap flex-col md:fles-row items-center'>
                <img className='md:h-80' src={AboutImg} alt="About img" />
                <ul>
                    <div className='flex gap-3 py-4'>
                        {/* <IoArrowFroward size={30} className="mt-1" /> */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2*1 font-semibold leading-normal'>frontend Developer</h1>
                            <p className='text-sm  md:text-md leading-tight'>A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        {/* <IoArrowFroward size={30} className="mt-1" /> */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2*1 font-semibold leading-normal'>Backend Developer</h1>
                            <p className='text-sm  md:text-md leading-tight'>A backend developer focuses on creating and maintaining the server-side components of web applications. They are primarily tasked with developing server-side APIs, handling database operations, and ensuring that the backend can manage high traffic volumes efficiently.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        {/* <IoArrowFroward size={30} className="mt-1" /> */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2*1 font-semibold leading-normal'>Software Developer</h1>
                            <p className='text-sm  md:text-md leading-tight'>A software developer is a professional who creates computer applications and systems that allow users to perform specific tasks. They may work independently or collaborate with other team members, such as programmers, software engineers, and coders</p>
                        </span>
                    </div>
                </ul>
            </div>
            </div>
            </div>
  );
};

export default About;