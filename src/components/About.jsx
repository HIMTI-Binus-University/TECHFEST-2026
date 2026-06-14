import mascot from '../assets/mascot.png';

const About = () => {
  return (
    <section id="about" className="bg-[#00113c] text-white py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-6 max-w-xl">
            <span className="text-[#00f0ff] font-bold tracking-[0.25em] text-xs sm:text-sm font-body">
              BACK TO THE FUTURE!
            </span>
            
            <h2 className="about-heading">
              <span className="about-heading__about">ABOUT</span>
              <span className="about-heading__techfest">TECHFEST</span>
            </h2>
            
            <p className="text-gray-300 font-body text-sm sm:text-base leading-relaxed tracking-wider text-justify md:text-left">
              Techfest (Technology Festival) adalah rangkaian acara bagi mahasiswa di seluruh Indonesia untuk menyalurkan minat dan bakat di bidang IT. Melalui kompetisi dan sesi bincang teknologi, Techfest mendorong inovasi dan kemampuan problem-solving. Tahun ini, kami mengusung tema &ldquo;(CITE) Competition of Innovation Across Time Eras&rdquo;, menghadirkan dua kegiatan utama: TechTalk dan Kompetisi.
            </p>
          </div>

          {/* Right Column: Mascot Image */}
          <div className="flex justify-center items-center relative lg:pl-10">
            {/* Glowing background behind mascot */}
            <div className="absolute w-72 h-72 bg-[#ff0055]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            <img 
              src={mascot} 
              alt="TechFest Mascot" 
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[500px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500 ease-out animate-float"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;