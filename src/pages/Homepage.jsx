import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import About from '../components/About'
import MainEvents from '../components/MainEvents'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <MainEvents />
        <Sponsors />
        <Timeline />
      </main>

      <Footer />
    </div>
  )
}

export default Homepage
