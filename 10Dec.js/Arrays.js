// In JS everything is an object => Null 
// => Allow us to store an odered collection of items. 

//           (INPUT)                                                   (OUTPUT)

let arr = new Array()
arr                                                                   // []


// let arr = []                                                       // []
arr

let nums = [10,20,30,40]
nums                                                                  // [10, 20, 30, 40]

// let nums = [10,20,30,40]
console.log(nums[0])                                                  // 10

// let nums = [10,20,30,40]
console.log(nums[2])                                                  // 30

// let nums = [10,20,30,40]
console.log(nums[4])                                                  // undefined

// let arr = [10,'a',30,'john']                                    
arr                                                                   // [ 10, 'a', 30, 'john' ]

// let arr = ['john',{name : 'john'},true,function(){console.log('hello')}]
arr[3]()                                                              // hello

// let arr = ['john',{name : 'john'},true,function(){console.log('hello')}]
console.log(arr[0])                                                   // john


// Strings,Booleans,Numbers => primiive data types => passed by values.
// Arrays.Objects => non primitive data types => passed by reference.

var a = 10
var b = a
b                                                                      // 10

var a = 10
var b = a
b = 20
b                                                                      // 20

let arr1 = [10,20]
let arr2 = arr1
arr1                                                                   // [ 10, 20 ]

// let arr1 = [10,20]
// let arr2 = arr1
arr1[1] = 30
arr1                                                                   // [ 10, 30 ]
arr2                                                                   // [ 10, 30 ]

// let nums =[10,20,30,40]
console.log(nums.length)                                               // 4

// let nums = [10,20,30,40]
let LastIndex = nums.legth-1
console.log(nums[LastIndex])
console.log(nums.at(-1))                                               // 40

// let nums = [10,20,30,40,50]
nums.push(200)
nums                                                                   // [ 10, 20, 30, 40, 50, 200 ]

// let nums = [10,20,30,40,50]
nums.pop()
nums                                                                   // [ 10 ,20, 30, 40 ]


// It pops(means remove) the last element one by one when we pop again and again.

// let nums = [10,20,30,40,50]
nums                                                                   // [ 10 ,20 ,30 ,40 ,50 ]
nums.shift()
nums                                                                   // [ 20 ,30 ,40 ,50 ]
nums.unshift(120)
nums                                                                   // [ 120 ,20 ,30 ,40 ,50 ]


// Basic for loop:-

// let nums = [10,20,30,40,50]
for(let i = 0;i < nums.length;i++){
    console.log(nums[i])                                               // 10,20, 30, 40, 50
}

// If youwant to index it:

// let nums = [10,20,30,40,50]
for(let i = 0;i < nums.length;i++){
    console.log(i)                                                     //  0, 1, 2, 3, 4                          
}

// Instead if need to work with index 
// use for in loop:

// let nums = [10,20,30,40,50]
for (let index in nums){
    console.log(index)                                                 //  0, 1, 2, 3, 4  
}

// let nums = [10,20,30,40,50]
for (let index in nums){
    console.log(nums[index])                                           // 10,20, 30, 40, 50
}

// let nums = [10,20,30,40,50]
// If you want to work with values use for of loop.
for(let value of nums){
    console.log(value)                                                 // 10,20, 30, 40, 50
}

// NOTE :-
// If you give (of) you get values.
// If you give (in) you get index.

// let nums = [10, 20, 30, 40, 50]
//Empty array
nums.length = 0
nums                                                                   // []

// Add and remove the items:-
// Splice(start index,delete count,item1,item2,.........,itemN)
// Swiss knife of arrays

let nums = [10,20,30,40,50]
nums.splice(0,3)                
nums                                                                   // 40,50

let nums = [10,20,30,40,50]
nums.splice(1,2)
nums                                                                   // 10,40,50

// Note :- In parenthesies( first digit is start index and second aone is delete courst).

// Delete the items from index 0 to 20items.
//nums

let nums = [10,20,30,40,50]
nums.splice(0,2,'i','am')
nums                                                                   // [ 'i', 'am', 30, 40, 50 ]

let nums = [10,20,30,40,50]
let returnItem = nums.splice(1,2,'i','am','a','person')
returnItem                                                            // 20,30

// Slice method in array:-

// arr.slice(startIndex;endIndex)

let nums = [10,20,30,40,50]
nums.slice(1,3)
nums                                                                  // 10, 20, 30, 40, 50

