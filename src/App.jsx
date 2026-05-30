import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-white">
      <Navbar />

      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto h-[60vh] flex items-center justify-center border-2 border-dashed border-gray-700 mt-10 rounded-xl">
           <p className="text-gray-400 font-mono">Other Page Sections Goes Here.</p>
        </div>
      </main>

      <Footer />
      
    </div>
  )
}

export default App