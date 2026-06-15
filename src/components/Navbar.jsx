import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'HOME', number: '01', to: '/', end: true },
  { label: 'COMPETITIONS', number: '02', to: '/competitions' },
  { label: 'TECHTALK', number: '03', to: '/techtalk' },
];

const getDesktopLinkClass = ({ isActive }) =>
  isActive
    ? 'active flex items-center text-[#00f0ff] font-bold tracking-widest text-sm drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]'
    : 'text-gray-400 hover:text-white font-bold tracking-widest text-sm transition-colors duration-300';

const getMobileLinkClass = ({ isActive }) =>
  `w-full flex items-center justify-between px-4 py-4 border-l-2 rounded-r-lg transition-all font-heading ${
    isActive
      ? 'active bg-white/5 border-[#00f0ff]'
      : 'text-gray-400 active:bg-white/5 border-transparent active:border-gray-500'
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  const desktopLinkClass = (path) =>
    isActive(path)
      ? 'flex items-center text-[#00f0ff] font-bold tracking-widest text-sm drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]'
      : 'text-gray-400 hover:text-white font-bold tracking-widest text-sm transition-colors duration-300';

  const mobileLinkClass = (path) =>
    isActive(path)
      ? 'w-full flex items-center justify-between px-4 py-4 bg-white/5 border-l-2 border-[#00f0ff] rounded-r-lg font-heading'
      : 'w-full flex items-center justify-between px-4 py-4 text-gray-400 active:bg-white/5 border-l-2 border-transparent active:border-gray-500 rounded-r-lg transition-all font-heading';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-[#0c0e0b] sticky top-0 z-40 w-full font-heading border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center cursor-pointer overflow-hidden h-20 w-[240px] md:w-[260px] lg:w-[320px]">
              <Link to="/">
                <img
                  src={logo}
                  alt="TechFest 2026"
                  className="block h-24 md:h-36 w-auto max-w-none object-contain scale-125 origin-left"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={desktopLinkClass('/')}
              >
                HOME
              </Link>
              <Link 
                to="/competitions" 
                className={desktopLinkClass('/competitions')}
              >
                COMPETITIONS
              </Link>
              <Link 
                to="/techtalk" 
                className={desktopLinkClass('/techtalk')}
              >
                TECHTALK
              </Link>
              <a 
                href="https://bit.ly/EarlyBirdRegistrationTechfest2026" 
                className="ml-4 text-[#ff0055] border-2 border-[#ff0055] rounded-full px-6 py-2 font-bold tracking-widest text-sm hover:bg-[#ff0055] hover:text-white hover:shadow-[0_0_15px_rgba(255,0,85,0.5)] transition-all duration-300"
              >
                REGISTER
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                aria-expanded={isOpen}
                className="p-2 text-gray-300 hover:text-white focus:outline-none transition-colors"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
      <div 
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-[#0c0e0b] border-t border-white/10 rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div 
          className="w-full flex justify-center pt-4 pb-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-14 h-1.5 bg-gray-600 rounded-full"></div>
        </div>

        <div className="px-6 pb-12 pt-4 flex flex-col space-y-2 font-body">
          
              <Link 
            to="/" 
            onClick={toggleMenu}
            className={mobileLinkClass('/')}
          >
            <span className={`${isActive('/') ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]' : ''} font-bold tracking-widest text-lg`}>
              HOME
            </span>
            <span className={`${isActive('/') ? 'text-[#00f0ff]/50' : 'text-gray-600'} text-sm`}>01</span>
          </Link>
          
          <Link 
            to="/competitions" 
            onClick={toggleMenu}
            className={mobileLinkClass('/competitions')}
          >
            <span className={`${isActive('/competitions') ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]' : ''} font-bold tracking-widest text-lg`}>COMPETITIONS</span>
            <span className={`${isActive('/competitions') ? 'text-[#00f0ff]/50' : 'text-gray-600'} text-sm`}>02</span>
          </Link>
          
          <Link 
            to="/techtalk" 
            onClick={toggleMenu}
            className={mobileLinkClass('/techtalk')}
          >
            <span className={`${isActive('/techtalk') ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]' : ''} font-bold tracking-widest text-lg`}>TECHTALK</span>
            <span className={`${isActive('/techtalk') ? 'text-[#00f0ff]/50' : 'text-gray-600'} text-sm`}>03</span>
          </Link>
        
          <div className="pt-6">
            <a 
              href="https://bit.ly/EarlyBirdRegistrationTechfest2026" 
              onClick={toggleMenu}
              className="block w-full text-center text-white bg-[#ff0055] border-2 border-[#ff0055] rounded-xl px-8 py-4 font-bold tracking-widest text-lg shadow-[0_0_20px_rgba(255,0,85,0.4)] active:scale-95 transition-transform"
            >
              REGISTER NOW
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
