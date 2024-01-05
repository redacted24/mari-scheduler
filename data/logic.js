const fs = require('node:fs')

const courses = JSON.parse(
  fs.readFileSync('./Courses/schedule.json')
).courses


const findPossibilities = (choices, schedule=[]) => {
  if (!choices.length) return [schedule]

  let possibilities = []

  choices[0].forEach((choice) => {
    const options = findOptions(choice)

    options.forEach(option => {
      if (checkCompability(option, schedule)) {
        const newSchedule = schedule.concat(option)
        possibilities = possibilities.concat(findPossibilities(choices.slice(1), newSchedule))
      }
    })
  })

  return possibilities
}

const findOptions = (choice) => {
  return courses.filter(course => course.ID == choice)
}

const checkCompability = (choice, schedule) => {
  try {
    schedule.forEach(course => {
      course.classes.forEach(class_1 => {
        choice.classes.forEach(class_2 => {
          if (class_1[0] == class_2[0]) {
            const time_1 = getClassTime(class_1)
            const time_2 = getClassTime(class_2)
  
            if (time_1[0] < time_2[1] && time_1[1] > time_2[0]) throw new Error
          }
        })
      })
    })
  } catch {
    return false
  } 
  return true
}

const getClassTime = (_class) => {
  return _class
    .slice(2)
    .split('-')
    .map((time) => {
      return parseInt(time.split(':').join(''))
    })
}