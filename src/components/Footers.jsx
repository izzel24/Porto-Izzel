import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { TbBrandFiverr } from 'react-icons/tb'

export default function Footer() {
  return (
    <div className='mt-auto bg-[#1D1C1C] h-[150px] p-5 flex justify-center'>
      <div className='flex flex-col justify-center items-center gap-5 w-full'>
        <div className='flex justify-center items-center h-full gap-10'>
          <a href="https://www.instagram.com/izzelrohi__/" target='_blank'><AiFillInstagram size={30} className='text-[#BDA985]'/></a>
          <a href="https://github.com/izzel24" target='_blank'><AiFillGithub  size={30} className='text-[#BDA985]'/></a>
          <a href="https://www.linkedin.com/in/henry-j-678314287/" target='_blank'><AiFillLinkedin  size={30} className='text-[#BDA985]'/></a>
          <a href="https://www.fiverr.com/s/EgyKR37" target='_blank'><TbBrandFiverr  size={30} className='text-[#BDA985]'/></a>
          <a href="mailto:izzzzzzell2401@gmail.com"><AiFillMail  size={30} className='text-[#BDA985]'/></a>
        </div>
        <div className='h-[0.5px] bg-[#ffffff94] w-full mt-auto' />
        <p className='text-[#BDA985] sm:text-sm text-xs'>© 2025 Henry Frizzel. Designed & developed by me</p>
      </div>
    </div>
  )
}
