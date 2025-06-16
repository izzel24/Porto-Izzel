import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';
import bem1 from "../assets/bem7.png" 
import bem2 from "../assets/bem2.png" 
import bem3 from "../assets/bem3.png" 
import bem4 from "../assets/bem4.png" 
import bem5 from "../assets/bem5.png" 
import bem6 from "../assets/bem6.png" 
import { CiGlobe } from 'react-icons/ci';



const images = [bem1, bem2, bem3, bem4, bem5, bem6];

export default function BEM() {
  return (
    <>
     <div className="min-h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="font-boogaloo sm:text-6xl text-5xl text-[rgb(20,19,17)] opacity-[38%]">
        BEM FIA UB
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

          <div className='w-full flex justify-end col-span-1 md:col-span-2 lg:col-span-3'>
<span className='flex items-center gap-1 font-quicksand'><CiGlobe size={20} /><a href="https://bemfiaub.com/" target='_blank'><b>BEMFIAUB</b></a> </span></div>
        </div>
      </PhotoProvider>
      
    </div>
    <div>
        <h1 className='font-reem md:text-3xl text-xl'>Deskripsi Project</h1>
        <p className='font-quicksand md:text-lg text-xs'>
            Saya mengembangkan website statis untuk Badan Eksekutif Mahasiswa Fakultas Ilmu Administrasi Universitas Brawijaya (BEM FIA UB). Implementasi frontend sepenuhnya saya kerjakan menggunakan React.js dan Tailwind CSS, berdasarkan desain yang telah disediakan oleh tim BEM FIA UB.
            Website ini bertujuan menyajikan informasi organisasi.
        </p>
      
    </div>
    </>
  )
}
