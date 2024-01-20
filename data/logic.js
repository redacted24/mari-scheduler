const fs = require('node:fs')

const courses = JSON.parse(
  fs.readFileSync('./schedule.json')
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

const schedule = [
  {
    "section": 2,
    "ID": "202-LCU-05",
    "name": "Organic Chemistry I",
    "teacher": "Daly, Stewart",
    "classes": [
      "M 11:15-12:45",
      "W 10:15-12:15",
      "H 08:15-09:45"
    ]
  },

  {
    "section": 1,
    "ID": "101-LCV-05",
    "name": "Human Physiology",
    "teacher": "Barrie, Christine",
    "classes": [
      "M 14:15-16:15",
      "T 16:15-17:45",
      "H 16:15-17:45"
    ]
  },
  {
    section: 1,
    ID: '203-NYB-05',
    name: 'Electricity and Magnetism',
    teacher: 'Fatholahzadeh, Baharak',
    classes: [ 'M 16:15-17:45', 'T 14:15-15:45', 'H 14:15-16:15' ]
  },
  {
    section: 3,
    ID: '603-LPE-MS',
    name: 'Business Communication',
    teacher: 'Burton, Andrew',
    classes: [ 'W 14:15-16:15', 'F 14:15-16:15' ]
  },
  {
    section: 5,
    ID: '345-LPH-MS',
    name: 'Ethics and the Family',
    teacher: 'Richardson, Wendy',
    classes: [ 'T 08:15-09:45', 'F 08:15-09:45' ]
  },
]

const choices = [
  ["345-LPH-MS"]
]

console.log(findPossibilities(choices, schedule).map(schedule => schedule[schedule.length - 1]))
