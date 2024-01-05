import backendService from './services/backend'
import { useState, useEffect } from 'react'

const Second = () => {
  console.log("Loaded Second")
  return (
    <div>
      second
    </div>
  )
}

const App = () => {
  console.log("Loaded App")

  const [courses, setCourses] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)  

  // Initial data fetch
  useEffect(() => {
    console.log('Fetching courses data...')
    backendService
    .getData()
    .then((response) => {
      console.log(response)
      console.log('✅ Courses data successfully fetched!')
      setCourses(response)
    })
    // Make an Error Message Component
    .catch(() => {
      console.log('❌ Courses data could not be fetched')
      setErrorMessage('Error in fetching country data')
      setTimeout(() => setErrorMessage(null), 3000)
    })
  }, [])

  return (
    <div>
      <p>first app</p>
      <Second/>
    </div>
  )
}

export default App
