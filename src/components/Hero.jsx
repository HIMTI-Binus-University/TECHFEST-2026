import hero from '../assets/hero.png'
import city from '../assets/kotalama.png'
import ground from '../assets/kotalamaground.png'
import citybg from '../assets/BGKotaLama.png'
import { Link } from 'react-router-dom'
const Hero = () => {

  return(
    <section className="relative bg-[#00113B] w-full h-screen flex overflow-hidden flex-col items-center justify-center">
      {/*background*/}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-center">
          <img src={ground} className="absolute top-0 z-20 w-full h-[80px] md:h-[100px] object-cover object-bottom brightness-50"/>
          <img src={citybg} className="absolute inset-x-0 top-0 z-10 w-full h-full object-cover object-center -scale-y-100 opacity-30 brightness-[0.4]"/>
          <img src={city} className="absolute top-0 left-5 z-30 w-2/3 md:w-[760px] lg:w-[1000px] h-auto -scale-y-100 -scale-x-100 opacity-100 brightness-[0.4]"/>
      </div>
      {/*Techfest text*/}
      <div className="relative z-30 flex flex-col items-center space-y-4 md:space-y-6 mt-16 md:mt-32 text-center">
        <div className="text-5xl sm:text-7xl lg:text-[130px] font-black bg-gradient-to-b from-[#FF5481] to-[#FFAF08] bg-clip-text text-transparent whitespace-nowrap leading-none drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]">
          TECHFEST
        </div>
        {/*placeholder subtext*/}
        <p className="text-[16px] md:text-[20px] font-medium text-[#05BADD] max-w-2xl text-center">
          Ajang inovasi dan talenta di bidang IT bagi mahasiswa seluruh Indonesia dengan tema &ldquo;(CITE) Competition of Innovation Across Time Eras&rdquo;
        </p>
        {/*button + link*/}
        <Link 
        to="/register"
        className="mt-6 md:mt-8 bg-gradient-to-r from-[#FF5481] to-[#FFAF08] text-white font-bold py-3 px-8 md:px-16 rounded shadow-[0_0_20px_rgba(255,84,129,0.4)] hover:shadow-[0_0_30px_rgba(255,84,129,0.6)] transition-all duration-300 inline-block">
        REGISTER NOW
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00113B] to-transparent z-20" />
    </section>
  ) 
}
export default Hero

