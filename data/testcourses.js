const fs = require('node:fs')

const data = fs.readFileSync('./schedule.csv', 'utf-8').split('\r\n')
data[0] = data[0].slice(1)


let courses = []
let templines = [data[0]]

let keynumber = 1
data.slice(1).forEach(line => {
  if ('1234567890'.includes(line[0])) {
    const key = keynumber
    const section = parseInt(templines[0].split(' ')[0])
    const ID = templines[0].split(' ')[1]
    const name = templines[0].split(' ').slice(2).join(' ')
    const classes = templines.slice(2)
    key++
    let teacher = templines[1]

    if (teacher[0] === '"') {
      teacher = teacher.slice(1, -1)
    }

    courses.push({
      section, ID, name, teacher, classes
    })

    templines = [line]
  } else {
    templines.push(line)
  }

})

const jsonString = JSON.stringify({ courses }, null, 2)

fs.writeFileSync('./testschedule.json', jsonString)