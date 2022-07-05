import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import SetupPage from './pages/SetupPages/SetupPage'
import { Route, Routes, Link, Navigate } from 'react-router-dom'


function App() {
  const [initialSetup, setInitialSetup] = useState(() => {
    const local = JSON.parse(localStorage.getItem('setupComplete'))
    return local || false
  })

  const [options, setOptions] = useState({
    name: "",
    showNews: false,
    showWeather: false,
    showCalendar: false,
    newsConfig: {},
    calendarConfig: {},
    weatherConfig: {},
  })

  return (
    <div className="App h-screen w-screen flex items-center justify-center p-2">
      <Routes>
        <Route path='/' element={<Homepage initialSetup={initialSetup} options={options} />} />
        <Route path='/setup' element={<SetupPage setInitialSetup={setInitialSetup} options={options} setOptions={setOptions} />} />
      </Routes>
    </div>
  )
}

export default App
