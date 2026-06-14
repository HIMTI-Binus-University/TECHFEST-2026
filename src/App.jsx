import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Techtalk from './pages/Techtalk'
import Competitions from './pages/Competitions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/techtalk" element={<Techtalk />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App