// This component contains the courses that meet the values in the search bar.
const searchResult = ({search, courses}) => {
    if (!search) {
        return null
    }
    
    else {
        const filteredCourses = courses.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
        console.log(filteredCourses)
        return (
            <div>
                {filteredCourses.map(el => 
                    <p key = {el.name}>
                        {el.name}
                    </p>
                )}
            </div>
        )
    }
}

export default searchResult