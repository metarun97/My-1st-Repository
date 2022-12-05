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



console.log(str[5])                               // Undefined

// console.log(str.at())                           syntax

// let str = 'Hello';
console.log(str.at(0))                            // H


// For last element:-

// let str = 'hello';
console.log(str.at(-1))                            // o

// let str = 'hello';
console.log(str.at(-2))                            // l

// let str = 'hello';
console.log(str.at(-2))                            // undefined

// let str = 'Hello';
console.log(str[str.length-1])                     // o


// For of loop:-
// Itterate over araay or string or object:-

// let str = 'javascript'
for(let i = 0; i < str.length; i++){              // j,a,v,a,s,c,r,i,p,t
    console.log(str[i])
}

// let str = 'javascript'
for(let i = 0; i < str.length; i++){              // 0,1,2,3,4,5,6,7,8,9
    console.log(i)
}


// let str = 'javascript'
for(let i = 0; i < str.length-1; i++){            // 0,1,2,3,4,5,6,7,8
          console.log(i)
}

// let str = 'javascript'
for(let i = 0; i <= str.length-1; i++){           // 0,1,2,3,4,5,6,7,8,9
console.log(i)
}


// let str = 'javascript'
for(let i = 0; i <= str.length-1; i++){           // j,a,v,a,s,c,r,i,p,t
console.log(str[i])
}


// let str = 'javascript'
for(let i = 0; i <= str.length-1; i++){
    if(str[i] == 'v') continue                    // j,a,a,s,c,r,i,p,t
console.log(str[i])
}


// Better way for off loop:-

// let str = 'javascript'
for(let char of str){
    console.log(char)                             // j,a,v,a,s,c,r,i,p,t
}

// let str = 'javascript'
for(let char of str){
    if(char == 'v') continue                     
    console.log(char)                             // j,a,a,s,c,r,i,p,t
}







