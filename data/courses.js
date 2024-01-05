const fs = require('node:fs')

const data = fs.readFileSync('./schedule.csv', 'utf-8').split('\r\n')
data[0] = data[0].slice(1)


let courses = []
let templines = [data[0]]


data.slice(1).forEach(line => {
  if ('1234567890'.includes(line[0])) {
    const section = parseInt(templines[0].split(' ')[0])
    const ID = templines[0].split(' ')[1]
    const name = templines[0].split(' ').slice(2).join(' ')
    const teacher = templines[1].slice(1, -1)
    const schedule = templines.slice(2)

    courses.push({
      section, ID, name, teacher, schedule
    })

    templines = [line]
  } else {
    templines.push(line)
  }

})

const jsonString = JSON.stringify(courses, null, 2)

fs.writeFileSync('./schedule.json', jsonString)