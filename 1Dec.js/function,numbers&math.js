//                                                 [Function,Numbers & Math]

// Function in java script:-

// Buildibg blocks in (js) Java scipt
// Procedure=> a set of statements that perform some task or calculate.

// Programming
// 1- [(OOPS) Object oriented programming]                    2- Functional programming


// Create function:-

// (1) Function declaration
// (2) Function expressions
// (3) Anonymous function
// (4) Arrow function   => (This is the new one)
// ES-6 (Ecma Script)

// Function Declaration

function name (){}                                            // Sytax


// print the number from 1-5


// let i = 0
while(i < 5){
    console.log(i)                                            // 0 1 2 3 4
    i++
}


let i = 1
while(i <= 5){
    console.log(i)                                            // 1 2 3 4 5
    i++
}


function printValueFromOnetoFive(){
    let i = 1
while(i <= 5){                         
    console.log(i)                                             // No output
    i++}
}

// Now we do calling & invocation of the function.

function printValueFromOnetoFive(){
    let i = 1
while(i <= 5){
    console.log(i)                                            // 1 2 3 4 5
    i++}
}
printValueFromOnetoFive()

// Now output is shown.



function printValueFromOnetoFive(){
    let i = 1
while(i <= 5){
    console.log(i)                                          
    i++}
}
printValueFromOnetoFive()


console.log('hello world')                                    // hello world 1 2 3 4 5
// If i want to run upper function after 100 lines            

printValueFromOnetoFive()


console.log('hello')
function x(){
    console.log('greetings')                      // hello greetings bye
}
x()
console.log('bye')


let a = 10
let b = 20                                          // 30
// let sum = a + bconsole.log(sum)



let x = 5
let y = 10                                         // 15
let sum = x + y
console.log(sum)


function getSum(){
    let a = 10
    let b = 20                                          
    let sum = a + b                                // 30
    console.log(sum)
    }
    getSum()


    function getSum(){
        let a = 10
        let b = 20                                 // 30               
        let sum = a + b
        console.log(sum)
        }
        getSum()
        getSum()                                   // 30


function getSum(a,b){
    let sum = a + b
    console.log(sum)                              // 30
    }
    getSum(10,20)


function getSum(a,b){
    let sum = a + b
     console.log(sum)
     }
     getSum(10,20)                             // 30
     getSum(5,10)                              // 15
    getSum(2,3)                               // 5
 


function getSum(a,b){
    console.log('a is',a)
    console.log('b is',b)
    let sum = a + b                        // a is 10
    console.log(sum)                       // b is 20
    }                                      // (30)
    getSum(10,20)

    function getSum(a,b){
        if(a == 10 || a == 2){
            return
        }
    console.log('a is',a)                  
    console.log('b is',b)                  // a is 5
    let sum = a + b                        // a is 10
    console.log(sum)                       // b is 10
     }                                      
    getSum(10,20)
    getSum(5,10)
    getSum(2,3)


function getSum(a,b){
     console.log('hi')
    return (a + b)                         // hi 300
     }
    console.log(getSum(100,200))

function getSum(a,b){
        return (a + b)
        console.log('hi')                  // 300 hello world
        }
        console.log(getSum(100,200))
        console.log('hello world')


// How Java Script works-:

// 1- It makes Exicution context(EC):-

// Everything in (JS) happens inside (EC).
// JS runs in two phases=> 
// (a-) Memory Component
// (b-) Code exicution Component




























