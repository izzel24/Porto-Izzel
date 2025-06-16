import React from 'react'
import { CiGlobe } from 'react-icons/ci'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';

import FitnessTracker1 from "../assets/FitnessTracker1.png"
import FitnessTracker2 from "../assets/FitnessTracker2.png"
import FitnessTracker3 from "../assets/FitnessTracker3.png"
import FitnessTracker4 from "../assets/FitnessTracker4.png"
import FitnessTracker5 from "../assets/FitnessTracker5.png"
import FitnessTracker6 from "../assets/FitnessTracker6.png"

const images = [FitnessTracker1, FitnessTracker2, FitnessTracker3, FitnessTracker4, FitnessTracker5, FitnessTracker6];

export default function FitnessTracker() {
  return (
    <>
         <div className="min-h-screen flex flex-col justify-center items-center gap-10">
          <h1 className="font-boogaloo sm:text-6xl text-5xl text-[rgb(20,19,17)] opacity-[38%]">
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
    
              <div className='w-full flex justify-end col-span-1 md:col-span-2 lg:col-span-3'><span className='flex items-center gap-1 font-quicksand'><CiGlobe size={20} /><a href="" target='_blank'><b>-</b></a> </span></div>
            </div>
          </PhotoProvider>
          
        </div>
        <div>
            <h1 className='font-reem md:text-3xl text-xl'>Deskripsi Project</h1>
            <p className='font-quicksand md:text-lg text-xs'>
                Saya merancang desain antarmuka aplikasi Fitness Tracker secara mandiri menggunakan Figma. Aplikasi ini memungkinkan pengguna memantau aktivitas olahraga dan data kesehatan dengan tampilan yang intuitif dan mudah digunakan.
            </p>
          
        </div>
        </>
  )
}
