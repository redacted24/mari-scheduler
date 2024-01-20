import Row from './row'
import Course from './course'
import Class from './class'

const Schedule = () => {
  let times = []

  for (let i=8; i < 18; i += 0.5) {
    times.push(i + 0.25)
  }

  const courses = [
    {
      "section": 2,
      "ID": "420-LCW-MS",
      "name": "Programming Techniques and Applications",
      "teacher": "Vincent, Robert",
      "classes": [
        "M 09:45-11:15",
        "W 09:45-11:15",
        "H 14:15-16:15"
      ]
    },
    {
      "section": 1,
      "ID": "201-LCT-MS",
      "name": "Topics in Advanced Mathematics",
      "teacher": "Hamel, Mariah",
      "classes": [
        "M 14:15-15:45",
        "W 12:15-14:15",
        "F 12:45-14:15"
      ]
    },
    {
      section: 5,
      ID: '203-NYB-05',
      name: 'Electricity and Magnetism',
      teacher: 'Perreault, Jean',
      classes: [ 'M 16:15-17:45', 'W 16:15-17:45', 'F 10:15-12:15' ]
    },
    {
      "section": 3,
      "ID": "603-LPE-MS",
      "name": "Business Communication",
      "teacher": "Burton, Andrew",
      "classes": [
        "W 14:15-16:15",
        "F 14:15-16:15"
      ]
    },
    {
      "section": 5,
      "ID": "345-LPH-MS",
      "name": "Ethics and the Family",
      "teacher": "Richardson, Wendy",
      "classes": [
        "T 08:15-09:45",
        "F 08:15-09:45"
      ]
    },
    {
      section: 2,
      ID: '109-103-MQ',
      name: 'Cross Training',
      teacher: 'Dafniotis, Zoe',
      classes: [ 'H 10:15-12:15' ]
    }
  ]


  return (
    <>
      <h2>Possible Schedules</h2>
      <div className='schedule'>
        <table className='schedule_base'>
          <thead>
            <tr className='schedule_header'>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {times.map(time => <Row key={time} time={time} />)}
          </tbody>
        </table>
        {courses.map(course => <Course key={course.section + course.ID} course={course} />)}
      </div>
    </>
    
  )
}

export default Schedule