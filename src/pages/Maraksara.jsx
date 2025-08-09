import React from 'react'
import { CiGlobe } from 'react-icons/ci'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';

import maraksara1 from "../assets/maraksara.png"
import maraksara2 from "../assets/maraksara2.png"
import maraksara3 from "../assets/maraksara3.png"
import maraksara4 from "../assets/maraksara4.png"
import maraksara5 from "../assets/maraksara5.png"
import maraksara6 from "../assets/maraksara6.png"

const images = [maraksara1, maraksara2, maraksara3, maraksara4, maraksara5, maraksara6];

export default function Maraksara() {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center gap-10">
                <h1 className="font-boogaloo sm:text-6xl text-5xl text-[rgb(20,19,17)] opacity-[38%]">
                    MARAKSARA.ID
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

                        <div className='w-full flex justify-end col-span-1 md:col-span-2 lg:col-span-3'><span className='flex items-center gap-1 font-quicksand'><CiGlobe size={20} /><a href="https://maraksara.id/" target='_blank'><b>maraksara.id</b></a> </span></div>
                    </div>
                </PhotoProvider>

            </div>
            <div>
                <h1 className='font-reem md:text-3xl text-xl'>Deskripsi Project</h1>
                <p className='font-quicksand md:text-lg text-xs'>
                    Saya mengembangkan website edukasi aksara Batak menggunakan React.js untuk frontend dan Laravel sebagai backend, termasuk fitur kuis interaktif untuk belajar membaca aksara.
                </p>

            </div>
        </>
    )
}
