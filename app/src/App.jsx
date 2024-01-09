import backendService from './services/backend'
import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'
import SelectedCourses from './components/selectedCourses'
import Title from './components/title'
import SearchResult from './components/searchResult'

const App = () => {
  console.log("Loaded App")

  // States
  const [initial, setInitial] = useState([])
  const [courses, setCourses] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState([])

  // Handlers
  const handleAdd = (event) => {
    setCourses(courses.filter(el => el.ID !== event.ID))
    let temp = [...selected] // shallow equality problem
    temp.push(event)
    setSelected(temp)
    console.log("Added an entry to selected courses:")
    console.log(selected)
  }
  
  const handleReset = () => {
    setCourses(initial)
    setSelected([])
    setSearch('')
  }

  // Initial data fetch
  useEffect(() => {
    console.log('Fetching courses data...')
    backendService
    .getData()
    .then((response) => {
      console.log(response)
      console.log('✅ Courses data successfully fetched!')
      setCourses(response)
      setInitial(response)
    })

    // Make an Error Message Component
    .catch(() => {
      console.log('❌ Courses data could not be fetched')
      setErrorMessage('Error in fetching courses data')
      setTimeout(() => setErrorMessage(null), 3000)
    })
  }, [])

  // App return
  return (
    <div>
      <Title/>
      <SelectedCourses selected = {selected} setSelected = {setSelected} handleReset = {handleReset}/>
      <SearchBar search = {search} setSearch = {setSearch}/>
      <SearchResult search = {search} courses = {courses} handleAdd = {handleAdd}/>
    </div>
  )


}

export default App
