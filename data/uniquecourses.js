const fs = require('node:fs')

const data = fs.readFileSync('./schedule.csv', 'utf-8').split('\r\n')
data[0] = data[0].slice(1)


let courses = []
let unique = []
let templines = [data[0]]
let seen = []

let keynumber = 1
data.slice(1).forEach(line => {
  if ('1234567890'.includes(line[0])) {
    const key = keynumber
    const section = parseInt(templines[0].split(' ')[0])
    const ID = templines[0].split(' ')[1]
    const name = templines[0].split(' ').slice(2).join(' ')
    const classes = templines.slice(2)
    keynumber++
    let teacher = templines[1]

    if (teacher[0] === '"') {
      teacher = teacher.slice(1, -1)
    }

    const search = ID + " " + name + " " + teacher
    
    courses.push({
      key, section, ID, name, teacher, classes, search
    })

    templines = [line]
  } 
  
  else {
    templines.push(line)
  }
})

// Unique
for (let i = 0; i < keynumber-1; i++) {
  if (seen.includes(courses[i].ID)) {
    continue
  }
  else if (!(seen.includes(courses[i].ID))) {
    unique.push(courses[i])
    seen.push(courses[i].ID)
  }
}
console.log(seen)
console.log(unique)


const jsonString = JSON.stringify({ unique }, null, 2)

fs.writeFileSync('./uniquecourses.json', jsonString)