// This component contains the courses that meet the values in the search bar.
const searchResult = ({search, courses}) => {
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
                    <p key = {el.key}>
                        {el.name} {el.ID} {el.teacher}
                    </p>
                )}
            </div>
        )
    }
}

export default searchResult