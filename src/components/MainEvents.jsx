import { useRef } from 'react'
import './MainEvents.css'
import ctfImage from '../assets/ctf.jpg'
import dataAnalyticsImage from '../assets/dataanalytics.jpg'
import uiuxImage from '../assets/uiux.jpg'

const mainEvents = [
  {
    tag: 'CYBERSECURITY',
    title: 'CAPTURE\nTHE FLAG',
    bgColor: '#FF548166', 
    textColor: '#FF5481',
    image: ctfImage,
  },
  {
    tag: 'DATA SCIENCE',
    title: 'DATA\nANALYTICS',
    bgColor: '#00C7C066',
    textColor: '#00C7C0',
    image: dataAnalyticsImage,
  },
  {
    tag: 'DESIGN',
    title: 'UI/UX\nDESIGN',
    bgColor: '#FFAF0866',
    textColor: '#FFAF08',
    image: uiuxImage,
  },
]

const MainEvents = () => {
  const trackRef = useRef(null)

  const scrollCarousel = (direction) => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const firstCard = track.querySelector('.main-events__card')
    const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0
    const scrollDistance = (firstCard?.offsetWidth || track.clientWidth) + gap

    track.scrollBy({
      left: direction === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    })
  }

  return (
    <section className="main-events" aria-labelledby="main-events-title">
      <div className="main-events__container">
        <header className="main-events__header">
          <h2 className="main-events__heading" id="main-events-title">
            MAIN EVENTS
          </h2>

          <div className="main-events__controls">
            <button
              className="main-events__control"
              type="button"
              aria-label="Previous event"
              onClick={() => scrollCarousel('left')}
            >
              <span aria-hidden="true">&#8249;</span>
            </button>
            <button
              className="main-events__control"
              type="button"
              aria-label="Next event"
              onClick={() => scrollCarousel('right')}
            >
              <span aria-hidden="true">&#8250;</span>
            </button>
          </div>
        </header>

        <div className="main-events__track" ref={trackRef}>
          {mainEvents.map((event) => (
            <article
              className="main-events__card"
              key={event.tag}
              style={{ '--event-color': event.bgColor, '--event-image': `url(${event.image})` }}
            >
              <div className="main-events__card-content">
                <p className="main-events__tag" style={{ color: event.textColor }}>{event.tag}</p>
                <h3 className="main-events__title">{event.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainEvents
