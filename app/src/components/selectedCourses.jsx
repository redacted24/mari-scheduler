const SelectedCourses = ({selected}) => {
    console.log(selected)
    if (!selected) {
        return (
            <div>
                <p>Selected courses appear here, if any</p>
            </div>
        )
    }

    else {
        <div>
            {selected.map(el => 
                <p key = {el.key}>
                    {el.name} {el.ID} {el.teacher + " "} 
                </p>
            )}
        </div>
    }
    
}

export default SelectedCourses
