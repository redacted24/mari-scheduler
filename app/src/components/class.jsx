const Class = ({ course, time, color }) => {
  const weekdays = 'MTWHF' 

  const [day, classTime] = time.split(' ')

  let [startTime, endTime] = classTime.split('-')

  startTime = startTime.split(':')

  startTime = Number(startTime[0]) + startTime[1] / 60

  endTime = endTime.split(':')

  endTime = Number(endTime[0]) + endTime[1] / 60

  const classStyle = {
    left: weekdays.indexOf(day) * 119.9 + 80,
    top: (startTime - 8.25) * 82 + 21,
    height: (endTime - startTime) * 82 + 1,
    backgroundColor: color,
  }
 
  console.log(color)

  return (
    <div className="class" style={classStyle}>
      <p className="class_desc">{course.name}</p>
      <p className="class_desc">{course.teacher}</p>
      <p className="class_desc">{course.ID}</p>
      <p className="class_desc">Section {course.section}</p>
    </div>
  )
}

export default Class