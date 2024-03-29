import backendService from './services/backend'
import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'
import SelectedCourses from './components/selectedCourses'
import Title from './components/title'
import SearchResult from './components/searchResult'

const App = () => {
  console.log("Loaded App")

  // States
  const [courses, setCourses] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState([])

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
      <SelectedCourses selected = {selected} setSelected = {setSelected}/>
      <SearchBar search = {search} setSearch = {setSearch}/>
      <SearchResult search = {search} courses = {courses}/>
    </div>
  )
}

export default App
