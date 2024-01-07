const SearchBar = ({search, setSearch}) => {
    // This component includes the search bar as well as the results. 

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <p>Search for your courses:</p><input value = {search} onChange = {handleSearchChange}></input>
        </div>
    )
}

export default SearchBar