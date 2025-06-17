import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import mtix1 from "../assets/Mtix1.png";
import mtix2 from "../assets/Mtix2.png";
import mtix3 from "../assets/Mtix3.png";
import mtix4 from "../assets/Mtix4.png";
import mtix5 from "../assets/Mtix5.png";
import mtix6 from "../assets/Mtix6.png";
import { CiGlobe } from "react-icons/ci";

const images = [mtix1, mtix2, mtix3, mtix4, mtix5, mtix6];

export default function Mtix() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-10">
        <h1 className="font-boogaloo sm:text-6xl text-5xl text-[rgb(20,19,17)] opacity-[38%]">
          M TIX - CONCEPT REDESIGN
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

            <div className="w-full flex justify-end col-span-1 md:col-span-2 lg:col-span-3">
              <span className="flex items-center gap-1 font-quicksand">
                <CiGlobe size={20} />
                <a href="" target="_blank">
                  <b>-</b>
                </a>{" "}
              </span>
            </div>
          </div>
        </PhotoProvider>
      </div>
      <div>
        <h1 className="font-reem md:text-3xl text-xl">Deskripsi Project</h1>
        <p className="font-quicksand md:text-lg text-xs">
          Saya bersama tim mengerjakan proyek konsep UI/UX redesign untuk
          aplikasi MTix, platform pemesanan tiket bioskop. Proyek ini
          dilatarbelakangi oleh rendahnya rating aplikasi dan banyaknya ulasan
          pengguna yang mengeluhkan pengalaman penggunaan (user experience) yang
          kurang nyaman. Berdasarkan hal tersebut, kami merancang ulang
          antarmuka aplikasi sebagai latihan desain konseptual dengan pendekatan
          user-centered. Seluruh proses dilakukan menggunakan Figma, mencakup
          pembuatan wireframe, user flow, dan desain akhir (hi-fi design).
        </p>
      </div>
    </>
  );
}
