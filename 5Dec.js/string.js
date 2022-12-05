//                                               [STRINGS]


// String=> Sequence of characters ,text form
// Properties and methods

//       (INPUT)                                         (OUTPUT)

const string1 = 'Hello'
const string2 = 'World'

console.log(string1 + string2)                        // HelloWorld

// If you want to gave spaces in those words//

console.log(string1 + " " + string2)                 //  Hello World

// Note=> It is called as concatenatio or adding the strings.

// Other way to add strings:-

console.log(`${string1} ${string2}`)                 // Hello World

// 2nd Way => string constructor

const string3 = new String('A string')
console.log(string3)                                 // [String: 'A string']

//  Easy way:-

// Strings are of primitive data types.
// They are passed by value.

let string = 'hello'
// let string2 = string
// console.log(string == string2)

// Note=> (.length property tell the length of your console word.)

console.log(string.length)                           // 5

// Accessing the elements:-

let str = 'Hello';
//First caracter
console.log(str[0])                                  // H






