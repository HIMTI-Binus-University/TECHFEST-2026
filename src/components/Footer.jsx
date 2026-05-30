import React from 'react';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#0c0e0b] font-mono pt-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          
          {/* Left Section: Logo & Description */}
          <div className="flex flex-col">
            <div className="flex-shrink-0 flex items-center overflow-hidden h-16 w-[240px] md:w-[320px]">
              <a href="/">
                <img
                  src={logo}
                  alt="TechFest 2026"
                  className="block h-24 md:h-36 w-auto max-w-none object-contain scale-125 origin-left"
                />
              </a>
            </div>
            <p className="text-gray-400 mt-4 max-w-sm text-sm leading-relaxed">
              Lorep ipsum some stuff put this text later.
            </p>
          </div>

          {/* Right Section: Quick Links */}
          <div className="flex flex-col md:min-w-[200px]">
            <h3 className="text-[#00f0ff] text-lg mb-6 tracking-wide drop-shadow-[0_0_8px_rgba(0,240,255,0.2)]">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="/" 
                  className="text-gray-400 hover:text-white text-sm tracking-widest font-bold transition-colors duration-300"
                >
                  HOME
                </a>
              </li>
              <li>
                <a 
                  href="/competitions" 
                  className="text-gray-400 hover:text-white text-sm tracking-widest font-bold transition-colors duration-300"
                >
                  COMPETITIONS
                </a>
              </li>
              <li>
                <a 
                  href="/techtalk" 
                  className="text-gray-400 hover:text-white text-sm tracking-widest font-bold transition-colors duration-300"
                >
                  TECHTALK
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/5 py-6 w-full bg-[#0c0e0b]">
        <p className="text-gray-500 text-sm text-center">
          &copy; 2026 TECHFEST. ALL RIGHTS RESERVED.
        </p>
      </div>

    </footer>
  );
};

export default Footer;