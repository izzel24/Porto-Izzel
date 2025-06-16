import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';

import barberians1 from "../assets/barberians1.png"
import barberians2 from "../assets/barberians2.png"
import barberians3 from "../assets/barberians3.png"
import barberians4 from "../assets/barberians4.png"
import barberians5 from "../assets/barberians5.png"
import barberians6 from "../assets/barberians6.png"
import { CiGlobe } from 'react-icons/ci';

const images = [barberians1, barberians2, barberians3, barberians4, barberians5, barberians6];

export default function Barberians() {
  return (
    <>
     <div className="min-h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="font-boogaloo sm:text-6xl text-5xl text-[rgb(20,19,17)] opacity-[38%]">
        BARBERIANS
      </h1>

      <PhotoProvider>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center mb-20">
          {images.map((img, index) => (
            <PhotoView key={index} src={img}>
              <div
                className="sm:h-[250px] h-[200px] w-[300px] sm:w-[350px] bg-cover bg-center cursor-pointer rounded-md shadow-md hover:scale-105 transition"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </PhotoView>
          ))}

          <div className='w-full flex justify-end col-span-1 md:col-span-2 lg:col-span-3'><span className='flex items-center gap-1 font-quicksand'><CiGlobe size={20} /><a href="" target='_blank'><b>-</b></a> </span></div>
        </div>
      </PhotoProvider>
      
    </div>
    <div>
        <h1 className='font-reem md:text-3xl text-xl'>Deskripsi Project</h1>
        <p className='font-quicksand md:text-lg text-xs'>
            Saya mengembangkan platform booking barber bernama Barberians bersama tim yang terdiri dari empat orang. Saya bertanggung jawab penuh pada sisi backend menggunakan Laravel, serta ikut berkontribusi dalam implementasi frontend menggunakan React.js dan Tailwind CSS. Platform ini memungkinkan pengguna untuk mencari dan melakukan booking barber terdekat atau barber pilihan mereka dengan mudah dan cepat.
        </p>
      
    </div>
    </>
  )
}
