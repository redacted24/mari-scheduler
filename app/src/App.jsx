import { useState } from 'react'
import Schedule from './components/schedule'


const App = () => {
  const [courseID, setCourseID] = useState('')

  const handleIDChange = (event) => {
    setCourseID(event.target.value)
  }

  return (
    <div>
      <h3>Mari Schedule Builder</h3>
      <Schedule />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App