import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';

import picts1 from "../assets/ptics1.png"
import picts2 from "../assets/ptics2.png"
import picts3 from "../assets/ptics3.png"
import picts4 from "../assets/ptics4.png"
import picts5 from "../assets/ptics5.png"
import picts6 from "../assets/ptics6.png"
import { CiGlobe } from 'react-icons/ci';

const images = [picts1, picts2, picts3, picts4, picts5, picts6];

export default function Ptics() {
  return (
 <>
         <div className="min-h-screen flex flex-col justify-center items-center gap-10">
          <h1 className="font-boogaloo text-6xl text-[rgb(20,19,17)] opacity-[38%]">
            FITNESS TRACKER
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
    
              <div className='w-full flex justify-end col-span-3'><span className='flex items-center gap-1 font-quicksand'><CiGlobe size={20} /><a href="" target='_blank'><b>-</b></a> </span></div>
            </div>
          </PhotoProvider>
          
        </div>
        <div>
            <h1 className='font-reem md:text-3xl text-xl'>Deskripsi Project</h1>
            <p className='font-quicksand md:text-lg text-xs'>
                Saya mengembangkan website PTICS secara mandiri, mencakup implementasi frontend dan backend menggunakan Laravel dan Bootstrap untuk styling. Website ini berfungsi sebagai platform pemesanan tiket film, memungkinkan pengguna memilih film serta menentukan kursi yang diinginkan.
            </p>
          
        </div>
        </>
  )
}
