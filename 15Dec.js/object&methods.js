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




