//                                                          [OBJECT & METHODS]

// Objects:-

// key : value
// {} curly brackets are for objescts.
// Note:- Objects are passed by reference.

// let user = new object   (Object constructor syntax)
// user

// let user = {}           (Object leteral syntax)
// user


//                                                        [MY PRACTICE]

let user = {
    name : 'john',
    age : 30
}
user

console.log(user.name)
console.log(user.name,user.age)
user.isTeacher =true
user
console.log(user['name'])


// Computed properties:-

// (1) Dot rotation method:-

// let item = prompt("whivh item to buy?")
console.log(item)           // coke                         coke

// let item = prompt("which item to buy?")
let container = {
    'item': 10
}
console.log(container)      // coke                        item:10


// Note=> That's why we use square brackets for this stuff.

function createUser(name,age){
    return{
        name: name,
        age: age
    }
}
letuser = createUser('john',20)
letuser2 = createUser('peter',30)
console.log('user',user)                               // {name:'john',age:20}
console.log('user2',user2)                             // {name:'peter',age:30}

// Square brackets method:-
let item = prompt("which itwm to buy?")
container[item] = 10
console.log(container)      // coke                    // [coke:10]

// let item = prompt("which itwm to buy?")
container[item] = 10
console.log(container)      // cheese                  // [cheese:10]

//Note=> Square bracket method is more powerfulin this stuff.
// Only use
// # When property is known then we use dot rotation methd.
// # when we need more complex you need some thing dynmic the use [] square brackets only.


// In Keywords:-

let user = {
    name : 'john',
    age : 20
}
console.log("name"in user)
console.log("age"in user)

// using delete keyword:-



let obj = {
    name : 'john',
    age : 20
}
delete obj.name
obj


let arr = [10,20,30,40]
delete arr[1]

// It not works because delete is only for objects.

// let obj = {
    name : 'john',
  //  age : 20
// }
// let obj2 = obj
obj2.name = 'peter'
console.log(obj.name)

//Note=> Passed by reference.

// For in loop:-

// let obj = {
    name : 'john',
 //   age : 20
// }
// for(let key in obj){
    key
    console.log(obj[key])
//}

// let obj = {
    name : 'john',
 //   age : 20
// }
// let data = Object.keys(obj)
data

// It convertedinto array then we can do map and reduce on this.

// let obj = {
    name : 'john',
//    age : 20
// }
// let data = Object.values(obj)
data

// let obj = {
    name : 'john',
//     age : 20

// let data = Object.values(obj)
// for(let value of data)
value
// }

let itemPrices= {
    coke : 20,
    pizza : 200,
    burger : 100
}
let priceDoubled = Object.entries(itemPrices)
priceDoubled

// let itemPrices= {
    coke : 20,
//   pizza : 200,
 //   burger : 100
// }
// let priceDoubled = Object.entries(itemPrices).map((item) => {
   // return [item[0] , item[1]* 2]
// })
priceDoubled

// let itemPrices= {
    coke : 20,
//    pizza : 200,
//   burger : 100
// }
// let priceDoubled = Object.entries(itemPrices).map((item) =>{
//    return [item[0], item[1]* 2]
// })
console.log(Object.fromEntries(priceDoubled))

// let itemPrices= {
    coke : 20,
 //   pizza : 200,
//     burger : 100
// }
// let priceDoubled = Object.entries(itemPrices).map((item) =>{
 //  return [item[0], item[1]* 2]
// })
priceDoubled


// Use object.entries to get an array of key and value pairs.
// Use aray methods
// Use object.fromEntries(array) to convert it again back to object.

// let obj = {name: 'john'}
// let obj2 = {name: 'john'}
console.log(obj == obj2)

// let obj = {name: 'john'}
let obj2 = obj
console.log(obj == obj2)

// Filter:-

// let nums = [10,20,30,40,50]
// let filteredItems = nums.filter((nums,index) =>{

// })
filteredItems


// let nums = [10,20,30,40,50]
// let filteredItems = nums.filter((nums,index) =>{
    return []
// })
filteredItems 


let nums = [10,20,30,40,50]
let filteredItems = nums.filter((nums,index) =>{
    return [nums]
})
filteredItems 

// Note:- When return is not given then it gives [] output.

//let nums = [10,20,30,40,50]
//let filteredItems = nums.filter((nums,index) => nums<40)
filteredItems 

// Note:- When return is not given then it gives [] output.
// let nums = [1,2,3,4,5,6,7,8,9,10]
// let filteredItems = nums.filter((nums,index) => nums%2==0)
filteredItems 

let users = [
    {
    name : 'john',
    age : 20
},

{
    name : 'peter',
    age : 30
},
{
    name : 'jonathan',
    age : 35
},
{
    name : 'johnson',
    age : 50
}
]
users


// let users = [
  //  {
    name : 'john',
 //   age : 20
//},

{
    name : 'peter',
    age : 30
},
{
    name : 'jonathan',
    age : 35
},
{
    name : 'johnson',
    age : 50
}
// ]
users
 // let filterusers = users.map((user,inex) => {
    return user.age < 40

 // })
 filterusers

 // let users = [
    //{
    name : 'john',
 //   age : 20
//},

{
    name : 'peter',
    age : 30
},
{
    name : 'jonathan',
    age : 35
},
{
    name : 'johnson',
    age : 50
}
//]
users
 let filterusers = users.filter((user,inex) => {
    return user.age > 40

 })
 filterusers

// Note:- If user is less then 40 it gives three upper value in output.

// Reduce method:-

const numbers = [10,20,30,40]
let sum = numbers.reduce((acc,cur) =>{
    acc
},0)
sum

// const numbers = [10,20,30,40]
// let sum = numbers.reduce((acc,cur) =>{
    cur
// },0)



// const numbers = [10,20,30,40]
// let sum = numbers.reduce((acc,cur) =>{
    acc = acc + cur
    return acc
//},0)
sum

// In single line form:-

//const numbers = [10,20,30,40]
//let sum = numbers.reduce((acc,cur) => acc = acc + cur,0)
sum

// const numbers = [10,20,30,40]
// let average = numbers.reduce((avg,value) => {
    avg
// },0)


 //const numbers = [10,20,30,40]
// let average = numbers.reduce((avg,value,array) => {
   value
// },0)
avg


// const numbers = [10,20,30,40]
let average = numbers.reduce((acc,curr,currentIndex,array) => {
  acc
  curr
  currentIndex
  array
},0)
average

// const numbers = [10,20,30,40]
//let average = numbers.reduce((avg,value, array) => {
   array
// },0)

// Note:- Underscore is to skip function.

// const numbers = [10,20,30,40]
// let average = numbers.reduce((avg,value,_,array) => avg + (value)/array.length,0)
average

// Destructuring:-

// Arrae Destructuring:-

// let arr = [10,20,30,40]
const [a,b,c,d] = arr
a
b
c
d

// Object Destructuring:-

// let obj = {name : 'john', age: 20}
const{name,age} = obj
name
age

// Sets:-

// let arr = [10,20,30,40,20,40,30]
// let uniqueNums = new Set(arr)
uniqueNums

// Note:- This is neither an array not an object.

// let arr = [10,20,30,40,20,40,30]
let uniqueNums = [...new Set(arr)]
uniqueNums








