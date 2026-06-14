import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Competitions.css'

const competitions = [
   {
      id: 'ui-ux-design',
      category: 'ARCHITECTS OF THE FUTURE',
      title: 'UI/UX DESIGN',
      description:
         "Design the interfaces that will power tomorrow's technologies. Participants will receive a prompt challenging them to solve a complex user experience problem using futuristic aesthetics.",
      tags: ['Figma', 'Prototyping', 'Research'],
      themeColor: 'var(--tf-pink)',
      prizePool: 'Rp 2.250.000',
      guidebookUrl:
         '',
   },
   {
      id: 'capture-the-flag',
      category: 'TEMPORAL SECURITY BREACH',
      title: 'CAPTURE THE FLAG',
      description:
         'Hackers wanted. Penetrate secure networks, solve cryptographic puzzles, and secure the flags before the timeline collapses. Suitable for both beginners and seasoned pros.',
      tags: ['Cryptography', 'Web Exploitation', 'Forensics'],
      themeColor: 'var(--tf-cyan)',
      prizePool: 'Rp 3.250.000',
      guidebookUrl:
         '',
   },
   {
      id: 'data-analytics',
      category: 'PREDICTIVE ALGORITHMS',
      title: 'DATA ANALYTICS',
      description:
         'Dive deep into massive datasets from alternate timelines. Extract meaningful insights, visualize complex patterns, and present data-driven solutions to real-world problems.',
      tags: ['Python', 'Machine Learning', 'Visualization'],
      themeColor: 'var(--tf-amber)',
      prizePool: 'Rp 3.250.000',
      guidebookUrl:
         '',
   },
]

const Competitions = () => {
   return (
      <>
         <Navbar />

         <main className="competitions-page competitions-wrapper">
            <img
               src="/bg-top.svg"
               className="bg-svg-top"
               aria-hidden="true"
               alt=""
            />
            <img
               src="/bg-city.svg"
               className="bg-svg-bottom"
               aria-hidden="true"
               alt=""
            />

            <div className="competitions-main">
               <section
                  className="competitions-hero"
                  aria-labelledby="competitions-title"
               >
                  <div className="competitions-hero__copy">
                     <h1
                        className="neon-stroke neon-stroke--competition"
                        id="competitions-title"
                     >
                        COMPETITIONS
                     </h1>
                     <p className="competitions-hero__description">
                        Choose your arena. Compete against the brightest minds across
                        multiple dimensions.
                     </p>
                  </div>

                  <div className="competitions-list">
                     {competitions.map((competition) => (
                        <article
                           className="competition-card"
                           key={competition.id}
                           style={{ '--competition-color': competition.themeColor }}
                        >
                           <div className="competition-card__icon" aria-hidden="true">
                              <img
                                 className="competition-card__icon-img"
                                 src={`/${competition.id}.svg`}
                                 alt={`${competition.title} icon`}
                              />
                           </div>

                           <div className="competition-card__content">
                              <p className="competition-card__category">
                                 {competition.category}
                              </p>
                              <h2 className="competition-card__title">
                                 {competition.title}
                              </h2>
                              <p className="competition-card__description">
                                 {competition.description}
                              </p>
                              <ul
                                 className="competition-card__tags"
                                 aria-label={`${competition.title} tags`}
                              >
                                 {competition.tags.map((tag) => (
                                    <li className="competition-card__tag" key={tag}>
                                       {tag}
                                    </li>
                                 ))}
                              </ul>
                           </div>

                           <aside
                              className="competition-card__actions"
                              aria-label={`${competition.title} actions`}
                           >
                              <p className="competition-card__prize-label">PRIZE POOL</p>
                              <p className="competition-card__prize">{competition.prizePool}</p>
                              <a
                                 href={competition.guidebookUrl}
                                 target="_blank"
                                 rel="noreferrer"
                                 className="competition-card__button"
                              >
                                 Guidebook
                              </a>
                              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfovXbW9HcBnXhqgSE_lcQiw4ZKI9WlQr_ccDPnc1F-tmqp0g/viewform?usp=publish-editor" className="competition-card__button">
                                 Register
                              </a>
                           </aside>
                        </article>
                     ))}
                  </div>
               </section>

               {/*
               <section
                  className="partners-section"
                  aria-label="Sponsors and media partners"
               >
                  <div className="partners-section__content">
                     <div className="partners-section__group partners-section__group--sponsors">
                        <h2 className="neon-stroke neon-stroke--light">SPONSORS</h2>
                        <span className="section-accent section-accent--pink" />
                     </div>

                     <div className="partners-section__group partners-section__group--media">
                        <h2 className="neon-stroke neon-stroke--light">
                           MEDIA PARTNER
                        </h2>
                        <span className="section-accent section-accent--amber" />
                     </div>
                  </div>
               </section>
               */}
            </div>
         </main>

         <Footer />
      </>
   )
}

export default Competitions
