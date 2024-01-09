// This component contains the courses that meet the values in the search bar.
const SearchResult = ({search, courses, handleClick}) => {
    console.log("Loaded SearchResult")
    
    const filteredCourses = courses.filter(el => el.search.toLowerCase().includes(search.toLowerCase()))
    if (!search) {
        return null
    }
    else if (filteredCourses.length > 7) {
        return (
            <div>
                <p>Too many matches; please specify filter.</p>
            </div>
        )
    }
    else {
        console.log(filteredCourses)
        return (
            <div>
                {filteredCourses.map(el => 
                    <p key = {el.key}>{el.name} {el.ID} {el.teacher + " "} 
                        <button onClick = {() => handleClick(el)}>Add</button>
                    </p>
                )}
            </div>
        )
    }
}

export default SearchResult