const SearchBar = ({search, setSearch}) => {
    // Handle the Input Bar
    const handleSearchChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }

    return (
        <div>
            <p>Search for your courses:</p><input value = {search} onChange = {handleSearchChange}></input>
        </div>
    )
}

export default SearchBar