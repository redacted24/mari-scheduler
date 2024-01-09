const SelectedCourses = ({selected}) => {
    console.log("Loaded SelectedCourses")
    console.log(selected)
    if (selected.length == 0) {
        return (
            <div>
                <p>Selected courses appear here, if any</p>
            </div>
        )
    }

    else {
        return (
        <div>
            {selected.map(el => 
                <p key = {el.key}>
                    {el.name} {el.ID} {el.teacher + " "} 
                </p>
            )}
        </div>
    )}
    
}

export default SelectedCourses
