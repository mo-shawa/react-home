import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import SetupPage from './pages/SetupPage'
import { Route, Routes, Link } from 'react-router-dom'


function App() {
  const [initialSetup, setInitialSetup] = useState(false)
  const [options, setOptions] = useState({
    showNews: false,
    showWeather: false,
    showCalendar: false,
    newsConfig: {},
    calendarConfig: {},
    weatherConfig: {},
  })

  return (
    <div className="App h-screen w-screen flex items-center justify-center p-2">
      {/* {initialSetup
        ?
        <Homepage options={options} />
        :
        <SetupPage setInitialSetup={setInitialSetup} />
      } */}
      <Link to='/app'>go home</Link>
      <Link to='/setup'>go setup</Link>
      {/* <Homepage options={options} /> */}
      <Routes>
        <Route path='/app' element={<Homepage />} />
        <Route path='/setup' element={<SetupPage />} />

      </Routes>
    </div>
  )
}

export default App
