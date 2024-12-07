import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import {CiLinkedin} from "react-icons/ci";
import {FaGithub}  from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Contact" className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2*1 md:text-6*1 font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2*l font-normal'> Free To reach out!</h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex gap-1 items-center'>
                <MdOutlineEmail size={20}/>
                Vijayalaxmi123@gmail.com
            </li>
            <li className='flex gap-1 items-center'>
                <CiLinkedin/>
                linkedin.com/vijayalaxmi
            </li>
            <li className='flex gap-1 items-center'>
               <FaGithub/> 
               github.com/vijayalaxmi
            </li>
        </ul>
    </div>
  )
}

export default Footer