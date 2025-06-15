import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import oldpaper from '../assets/old-paper.jpg'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Footer from '../components/footer'

export default function ProjectLayout() {
  return (
    <>
    <div className="relative min-h-screen bg-[#BDA985] p-5">
        <Link to={"/"} className='flex gap-2 font-quicksand'><FaLongArrowAltLeft size={25}/>Kembali</Link>
      {/* Background absolute */}
      {/* <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${oldpaper})` }}
      />
      <div className='bg-[#764f19] h-screen absolute inset-0 opacity-45'/>

      <div className="relative z-10 h-full p-6 text-black">

        <div className='h-[500px] bg-white'> */}
            <Outlet />
        {/* </div> */}
        
      {/* </div> */}
    </div>
    <Footer />
    </>
  )
}
