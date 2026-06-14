import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CalendarIcon, LocationIcon, RightArrowIcon } from '../components/icon'
import { CityBackdrop, CitySkyline, LightGradient, MobileCityBackdrop, MobileCityLayer, MobileCitySkyline } from '../components/graphics'
import speakerImage from '../assets/image.png'

const Techtalk = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050a18] text-white">
      <Navbar />


      <main className="relative bg-[linear-gradient(180deg,#00113B_100%,#002EA1_100%)]">
        <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden px-5 py-14 sm:px-8 lg:px-12 xl:px-20">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <MobileCitySkyline className="absolute inset-x-0 top-[-30px] z-0 h-[265px] w-full opacity-70 md:hidden" preserveAspectRatio="none" />
            <MobileCityLayer className="absolute inset-x-0 bottom-[-166px] z-0 h-[504px] w-full md:hidden" preserveAspectRatio="none" />
            <MobileCityBackdrop className="absolute inset-x-0 bottom-[-158px] z-10 h-[507px] w-full md:hidden" preserveAspectRatio="none" />
            <CitySkyline className="absolute bottom-[-400px] left-1/2 z-0 hidden h-auto w-[1450px] max-w-none -translate-x-1/2 md:block" />
            <CityBackdrop className="absolute bottom-[-430px] left-1/2 z-10 hidden h-auto w-[1500px] max-w-none -translate-x-1/2 md:block" />
            <LightGradient className="absolute inset-x-0 bottom-0 z-20 h-[380px] w-full" preserveAspectRatio="none" />
            <div className="absolute inset-x-0 -bottom-28 z-30 h-[318.32px] bg-[linear-gradient(180deg,rgba(255,178,5,0)_0%,rgba(255,178,5,0.15)_37.02%,rgba(255,178,5,0.3)_69.71%,rgba(255,178,5,0.6)_100%)]" />
          </div>

          <div className="relative z-10 mx-auto grid min-h-[calc(100svh-12rem)] w-full max-w-6xl items-center gap-12 pt-3 pb-36 md:py-0 lg:grid-cols-[0.9fr_1fr]">
            <div className="mx-auto flex w-full max-w-[440px] flex-col items-center text-center lg:mx-0 lg:items-start lg:pl-2 lg:text-left">
              <div className="font-orbitron mb-4 inline-flex rounded-full border border-[#00C7C04D]/30 bg-[#00C7C01A]/10 px-8 py-2 text-[10px] font-bold text-[#00C7C0] md:px-10 md:text-[14px]">
                Sabtu, 25 Juli 2026
              </div>

              <div className="font-orbitron m-0 mb-10 text-[64px] font-bold uppercase leading-[0.78] tracking-[0.03em] text-white sm:text-[76px] md:text-[92px]">
                TECH
                <span className="mt-2 block bg-[linear-gradient(180deg,#00C7C0_0%,#00C6C2_7%,#00C5C4_14%,#00C4C6_21%,#00C3C9_28%,#00C3CB_35%,#00C2CD_42%,#00C1CF_49%,#00C0D1_56%,#01BFD3_63%,#02BED5_70%,#02BDD7_77%,#03BCD9_84%,#04BBDB_91%,#05BADD_100%)] bg-clip-text text-transparent">
                  TALK
                </span>
              </div>

              <p className="mt-2 max-w-[330px] text-xs leading-6 text-white/70 md:mt-12 md:max-w-[420px] md:text-sm md:leading-7">
                Seminar teknologi yang menghadirkan pembicara ahli untuk memperluas wawasan peserta tentang perkembangan terbaru di bidang Teknologi Informasi dan Komunikasi (TIK).
              </p>

              <div className="mt-7 grid w-full max-w-[300px] gap-4 text-left md:max-w-none">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#05BADD] bg-[#2B487180]/50">
                    <CalendarIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-white">25 Juli 2026</p>
                    <p className="mt-1 text-xs text-white/50">TBA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#05BADD] bg-[#2B487180]/50">
                    <LocationIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-white">Binus @Kemanggisan - Anggrek Ruang 800</p>
                    <p className="mt-1 text-xs text-white/50">ONSITE</p>
                  </div>
                </div>
              </div>

              <a
                href="/register"
                className="font-orbitron relative mt-8 inline-flex min-h-12 w-full max-w-[280px] items-center justify-center gap-3 overflow-hidden rounded bg-[linear-gradient(100deg,#10BFC4_0%,#12BFCC_48%,#27C5D7_78%,#62D4DF_100%)] px-5 text-base font-bold text-[#03122a] shadow-[0_0_24px_rgba(5,186,221,0.24)] transition duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_34px_rgba(5,186,221,0.4)] md:max-w-[320px] md:px-7 md:text-lg"
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,17,60,0.16)_0%,rgba(0,17,60,0)_48%)]" />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0.36)_62%,rgba(255,255,255,0.16)_76%,rgba(255,255,255,0)_100%)]" />
                <span className="relative z-10 whitespace-nowrap">Secure Your Seat</span>
                <RightArrowIcon className="relative z-10 h-6 w-6 shrink-0" />
              </a>
            </div>

            <div className="mx-auto hidden w-full max-w-[430px] md:block lg:mr-8">
              <article className="relative min-h-[560px] overflow-hidden rounded-b-2xl border border-[#2B4871] bg-[#020817] shadow-[0_28px_70px_rgba(0,0,0,0.42)]">
                <img
                  src={speakerImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.1)_100%)]" />
                <div className="absolute right-5 top-5 h-28 w-16 border-r-2 border-t-2 border-[#00C7C0]" />

                <div className="absolute bottom-10 left-7 right-7">
                  <span className="mb-4 inline-flex bg-[#FF5481] px-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white">
                    Our Speaker
                  </span>
                  <h2 className="mt-4 text-[20px] leading-tight text-white">TBA</h2>
                  <div className="absolute -bottom-4 -left-4 h-16 w-16 border-l-2 border-b-2 border-[#00C7C0]" />
                  <p className="max-w-[300px] text-[11px] font-bold leading-5 text-[#05d4df]">
                    "Beyond the Campus Lab: 
                    <br />
                    Bridging Academic Code to Industry Reality"
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Techtalk
