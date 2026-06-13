// Ganti nama file dan ekstensinya menjadi .svg sesuai yang ada di foldermu
import car2 from '../assets/Car with Path.svg'
import KotaBaru from '../assets/BG Kota Baru 4.svg'
import NewCityGround from '../assets/New City Ground.svg'
import SpaceCity from '../assets/Kota Baru.svg' 

import './Timeline.css'
const timelineEvents = [
  {
    dateTag: 'DATE TO BE ANNOUNCED',
    title: 'Registration Opens',
    description:
      'Secure your place and prepare to enter the next generation of technology.',
    themeColor: '#FF5481',
  },
  {
    dateTag: 'DATE TO BE ANNOUNCED',
    title: 'Technical Meeting',
    description:
      'Meet the organizers, review the event flow, and get every question answered.',
    themeColor: '#FF8007',
  },
  {
    dateTag: 'DATE TO BE ANNOUNCED',
    title: 'Competition Day',
    description:
      'Bring your strongest ideas to life and compete alongside ambitious innovators.',
    themeColor: '#FFAF08',
  },
  {
    dateTag: 'DATE TO BE ANNOUNCED',
    title: 'Tech Talk',
    description:
      'Explore new perspectives and practical insights from leaders in technology.',
    themeColor: '#00C7C0',
  },
  {
    dateTag: 'DATE TO BE ANNOUNCED',
    title: 'Awarding Ceremony',
    description:
      "Celebrate the teams, ideas, and achievements that shaped this year's Techfest.",
    themeColor: '#05BADD',
  },
]

function TimelineCard({ event, index }) {
  const side = index % 2 === 0 ? 'right' : 'left'

  return (
    <article
      className={`timeline-event timeline-event--${side}`}
      style={{ '--event-color': event.themeColor }}
    >
      <span className="timeline-event__dot" aria-hidden="true" />

      <div className="timeline-card">
        <p className="timeline-card__date">{event.dateTag}</p>
        <h3 className="timeline-card__title">{event.title}</h3>
        <p className="timeline-card__description">{event.description}</p>
      </div>
    </article>
  )
}

function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <div className="timeline-background" aria-hidden="true">
        <img
          className="timeline-background__ground"
          src={NewCityGround}
          alt=""
        />
        <img className="timeline-background__car" src={car2} alt="" />
        <img
          className="timeline-background__skyline"
          src={KotaBaru}
          alt=""
        />
        <img
          className="timeline-background__city"
          src={SpaceCity}
          alt=""
        />
      </div>

      <div className="timeline-container">
        <header className="timeline-header">
          <h2 className="timeline-header__title">
            <span>EVENT</span>
            <span className="timeline-header__accent">TIMELINE</span>
          </h2>
          <p className="timeline-header__subtitle">
            Ready up for these crucial moments!
          </p>
        </header>

        <div className="timeline-list">
          {timelineEvents.map((event, index) => (
            <TimelineCard
              key={`${event.title}-${index}`}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
