import dewawebLogo from '../assets/dewaweb-horizontal-logo-monochrome-white.png'
import sponsor10Logo from '../assets/10.png'

const Sponsors = () => {
  return (
    <section
      className="py-24 px-6 relative z-10 w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#00113c' }}
      aria-label="Sponsors and media partners"
    >
      <div className="w-full max-w-5xl flex flex-col items-center relative z-10">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

        <h2
          className="font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF5481] to-[#FF8007]"
          style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3rem)' }}
        >
          SPONSORS
        </h2>
        <span className="w-24 h-1 bg-[#FF5481] mt-6 shadow-[0_0_16px_rgba(255,84,129,0.46)] rounded-full"></span>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 w-full flex-wrap">
          <img
            className="w-full max-w-[260px] md:max-w-[320px] h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300 cursor-pointer"
            src={dewawebLogo}
            alt="Dewaweb"
          />
          <img
            className="w-full max-w-[260px] md:max-w-[320px] h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300 cursor-pointer"
            src={sponsor10Logo}
            alt="Sponsor 10"
          />
        </div>
      </div>
    </section>
  )
}

export default Sponsors
