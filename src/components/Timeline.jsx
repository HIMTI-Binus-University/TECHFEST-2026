import { Link } from 'react-router-dom';
import car2 from '../assets/car2.png';
import KotaBaru from '../assets/KotaBaru.png';
import SpaceCity from '../assets/SpaceCity.png';
import NewCityGround from '../assets/NewCityGround.png'

const events = [
  {
    date: "Tanggal",
    title: "Techfest (will add later) ",
    desc: "idk",
    side: "right",
    color: "#FF5481",
  },
  {
    date: "Tanggal",
    title: "Techfest1 (will add later)",
    desc: "idk part 2",
    side: "left",
    color: "#FF8007",
  },
  {
    date: "Tanggal",
    title: "Techfest 2 (will add later)",
    desc: "idk part 3",
    side: "right",
    color: "#FFAF08",
  },
  {
    date: "Tanggal",
    title: "Techfest 3 (will add later)",
    desc: "idk part 4",
    side: "left",
    color: "#00C7C0",
  },
  {
    date: "Tanggal",
    title: "Techfest 4 (will add later)",
    desc: "idk part 5",
    side: "right",
    color: "#05BADD"
  },
];

const TimelineItem = ({ date, title, desc, side, color }) => {
  const isRight = side === "right";

  return (
    <div className="relative flex w-full mb-12 items-center">
      {/* Colored dot - perfectly centered */}
      <div
        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-20"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}66`,
        }}
      />

      {/* Left Column Container */}
      <div className="w-1/2 pr-0 flex justify-end">
        {!isRight && (
          <div className="w-full max-w-[340px] bg-[#181818]/90 backdrop-blur-sm border border-white/[0.07] rounded-md px-5 py-4 hover:border-[#00f0ff]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer relative z-10">
           <span
            className="inline-block text-white text-[0.6rem] tracking-widest uppercase px-2 py-0.5 rounded mb-2 font-heading"
            style={{ backgroundColor: color }}
            >
              {date}
              </span>
            <h3 className="text-white font-heading font-bold tracking-wide text-base mb-1.5">
              {title}
            </h3>
            <p className="text-white/40 text-[0.75rem] leading-relaxed font-body">
              {desc}
            </p>
          </div>
        )}
      </div>

      {/* Right Column Container */}
      <div className="w-1/2 pl-0 flex justify-start">
        {isRight && (
          <div className="w-full max-w-[340px] bg-[#181818]/90 backdrop-blur-sm border border-white/[0.07] rounded-md px-5 py-4 hover:border-[#00f0ff]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer relative z-10">
            <span
              className="inline-block text-white text-[0.6rem] tracking-widest uppercase px-2 py-0.5 rounded mb-2 font-heading"
              style={{ backgroundColor: color }}
              >
              {date}
            </span>
            <h3 className="text-white font-heading font-bold tracking-wide text-base mb-1.5">
              {title}
            </h3>
            <p className="text-white/40 text-[0.75rem] leading-relaxed font-body">
              {desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section 
  id="timeline" 
  className="relative bg-gradient-to-b from-[#0c0e0b] via-[#2B4871]/40 to-[#2B4871]/80 px-6 py-20 min-h-screen overflow-hidden"
  >
      
      {/* bg scene */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        {/* bikin fixed disini */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full min-w-[1200px] h-full">
          
          <img
            src={NewCityGround}
            alt="DeLorean"
            className="absolute top-[70%] left-[10%] w-[400px] md:w-[800px]"
          />

          <img
            src={car2}
            alt="DeLorean"
            className="absolute top-[8%] left-[-20%] w-[700px] md:w-[800px]"
          />
          
          <img 
            src={KotaBaru} 
            className="absolute bottom-0 w-full h-[1200px]" 
          />
          
          <img
            src={SpaceCity}
            alt="Bright Foreground City"
            className="absolute bottom-0 right-[5%] w-[400px] md:w-[600px]"
          />

        </div>
      </div>

      {/* content disini */}
      <div className="relative z-10 max-w-4xl mx-auto pt-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-24">
          <h2 className="flex items-center gap-3">
            <span className="text-white font-extrabold text-[2.5rem]">EVENT</span>
            <span className="text-[#05BADD] font-extrabold text-[2.5rem]">TIMELINE</span>
          </h2>
          <p className="text-white/50 text-sm tracking-widest italic mt-2 font-body">
            Ready up for these crucial moments!
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00f0ff]/20 to-transparent -translate-x-1/2 z-0" />

          {/* Event Items */}
          <div className="relative z-10">
            {events.map((event, i) => (
              <TimelineItem key={i} {...event} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Timeline;