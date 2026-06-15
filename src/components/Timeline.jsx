import car2 from '../assets/Car with Path.svg'
import KotaBaru from '../assets/BG Kota Baru 4.svg'
import NewCityGround from '../assets/New City Ground.svg'
import SpaceCity from '../assets/Kota Baru.svg' 

import './Timeline.css'
const timelineEvents = [
  {
    dateTag: '15 - 22 JUNI 2026',
    title: 'Early Bird Registration',
    description:
      'Pendaftaran gelombang pertama dibuka! Segera daftarkan tim kamu untuk mendapatkan harga spesial.',
    themeColor: '#FF5481',
  },
  {
    dateTag: '23 - 30 JUNI 2026',
    title: 'Regular Registration',
    description:
      'Pendaftaran gelombang reguler. Pastikan tempatmu aman untuk berkompetisi di Techfest tahun ini.',
    themeColor: '#FF8007',
  },
  {
    dateTag: '6 JULI 2026',
    title: 'Webinar Techtalk',
    description: 'Sesi webinar online pra-event yang terbuka untuk umum sebagai pengantar sebelum acara puncak.',
    themeColor: '#00C7C0',
  },
  {
    dateTag: '8 JULI 2026',
    title: 'Technical Meeting',
    description:
      'Briefing wajib bagi seluruh peserta. Kita akan membahas aturan lomba, teknis, dan sesi tanya jawab.',
    themeColor: '#FFAF08',
  },
  {
    dateTag: '9 - 13 JULI 2026',
    title: 'Pengerjaan Lomba (Online)',
    description:
      'Masa pengerjaan project atau tantangan lomba secara online oleh masing-masing tim.',
    themeColor: '#00C7C0',
  },
  {
    dateTag: '14 - 18 JULI 2026',
    title: 'Penilaian Juri',
    description:
      'Fase evaluasi mendalam. Hasil karya peserta akan direview dan dinilai oleh dewan juri profesional.',
    themeColor: '#05BADD',
  },
  {
    dateTag: '19 JULI 2026',
    title: 'Pengumuman Finalis',
    description:
      'Pengumuman tim-tim terbaik yang berhasil lolos tahap penjurian dan berhak maju ke babak final.',
    themeColor: '#FF5481',
  },
  {
    dateTag: '19 - 23 JULI 2026',
    title: 'Pengerjaan PPT (Online)',
    description:
      'Waktu bagi para finalis untuk merancang materi dan slide presentasi yang memukau.',
    themeColor: '#FF8007',
  },
  {
    dateTag: '23 JULI 2026',
    title: 'Pengumpulan PPT Final',
    description:
      'Batas akhir (deadline) penyerahan file presentasi untuk digunakan pada babak final.',
    themeColor: '#FFAF08',
  },
  {
    dateTag: '25 JULI 2026',
    title: 'Final & Awarding (Onsite)',
    description:
      'Puncak acara Techfest! Presentasi langsung di hadapan juri, perayaan, dan pengumuman pemenang utama.',
    themeColor: '#00C7C0',
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
