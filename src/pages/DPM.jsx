import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import dpm from '../assets/dpm.png';
import dpm2 from '../assets/dpm2.png';
import dpm3 from '../assets/dpm3.png';
import dpm4 from '../assets/dpm4.png';
import dpm5 from '../assets/dpm5.png';
import dpm6 from '../assets/dpm6.png';
import { CiGlobe } from 'react-icons/ci';

const images = [dpm, dpm2, dpm3, dpm4, dpm5, dpm6];

export default function DPM() {
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center gap-10">
        
      <h1 className="font-boogaloo sm:text-6xl text-5xl text-[rgb(20,19,17)] opacity-[38%]">
        DPM FIA UB
      </h1>

      <PhotoProvider>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center mb-20">
          {images.map((img, index) => (
            <PhotoView key={index} src={img}>
              <div
                className="sm:h-[250px] h-[200px] w-[200px] sm:w-[350px] bg-cover bg-center cursor-pointer rounded-md shadow-md hover:scale-105 transition"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </PhotoView>
          ))}
          <div className='w-full flex justify-end col-span-1 md:col-span-2 lg:col-span-3'>
<span className='flex items-center gap-1'><CiGlobe size={20} /><a href="" target='_blank'><b>-</b></a> </span></div>
        </div>
      </PhotoProvider>
    </div>
    <div>
        <h1 className='font-reem md:text-3xl text-xl'>Deskripsi Project</h1>
        <p className='font-quicksand md:text-lg text-xs'>
            Saya mengembangkan website statis untuk Dewan Perwakilan Mahasiswa Fakultas Ilmu Administrasi Universitas Brawijaya (DPM FIA UB) bersama satu rekan tim. Saya berkontribusi dalam proses desain dan sepenuhnya mengerjakan implementasi frontend website menggunakan React.js dan Tailwind CSS.
            Website ini dibuat untuk menyajikan informasi organisasi.
        </p>
      
    </div>
    </>
  );
}
