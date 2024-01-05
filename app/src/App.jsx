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
  return (
    <div>
      <p>first app</p>
      <Second/>
    </div>
  )
}

export default App
