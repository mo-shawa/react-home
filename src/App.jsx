import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import SetupPage from './pages/SetupPage'



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
      {initialSetup
        ?
        <Homepage options={options} />
        :
        <SetupPage setInitialSetup={setInitialSetup} />
      }
      {/* <Homepage options={options} /> */}
    </div>
  )
}

export default App
