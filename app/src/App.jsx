import backendService from './services/backend'
import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'

const Title = () => {
  console.log("Loaded Title")
  return (
    <div>
      title
    </div>
  )
}

const App = () => {
  console.log("Loaded App")

  const [courses, setCourses] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [search, setSearch] = useState('')

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
      setErrorMessage('Error in fetching courses data')
      setTimeout(() => setErrorMessage(null), 3000)
    })
  }, [])

  return (
    <div>
      <Title/>
      <p>first app</p>
      <SearchBar search = {search} setSearch = {setSearch}></SearchBar>
    </div>
  )
}

export default App
