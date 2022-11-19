let hour = 19

if (hour <10 || hour >18) {
console.log('the office is closed')
}


let hour = 12
let isweekend = true

if (hour <10 || hour >18 || isweekend) {
console.log('the office is closed')
}


let hour = 12
let minutes = 30

if(hour == 12 && minutes == 30){
console.log('the time is 12:30')
}


let hour = 12
let minutes = 29

if(hour == 12 && minutes == 30){
console.log('the time is 12:30')
}


let isAdmin = true

if (isAdmin){
console.log('access granted')
}


let isAdmin = false

if (isAdmin){
console.log('access granted')
}else{
console.log('you are not an admin')
}


let isAdmin = true
console.log(!isAdmin)


let isAdmin = true
if(!isAdmin){
console.log('you are not an admin')
}else{
console.log('access granted')
}


let isAdmin = false
if(!isAdmin){
console.log('you are not an admin')
}else{
console.log('access granted')
}