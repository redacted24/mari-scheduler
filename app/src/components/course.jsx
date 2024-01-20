import Class from './class'

const Course = ({ course }) => {
  const color = '#' + [0, 0, 0].map(() => (255 - Math.floor(Math.random() * 56)).toString(16).padStart(2, 0)).join('')

  return (
    <>
      {course.classes.map(classTime => (
        <Class course={course} time={classTime} color={color} />
      ))}
    </>
  )
}

export default Course