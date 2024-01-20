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
      "section": 10,
      "ID": "603-LPE-MS",
      "name": "Gossip in Literature and Film",
      "teacher": "King, Stephanie",
      "classes": [
        "T 08:15-10:15",
        "F 08:15-10:15"
      ]
    },
    {
      "section": 4,
      "ID": "345-LPH-MS",
      "name": "Global Religious Violence",
      "teacher": "Miceli, Calogero",
      "classes": [
        "W 14:15-15:45",
        "F 14:15-15:45"
      ]
    }

]

const choices = [
  ["109-103-MQ"]
]

console.log(findPossibilities(choices, schedule).length)
console.log(findPossibilities(choices, schedule).map(schedule => schedule[schedule.length - 1]))
