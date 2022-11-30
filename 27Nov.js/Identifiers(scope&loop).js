// Loops and Scopes is Java Script

//    (INPUT)                          (OUTPUT)

console.log("1")                         // 1
console.log("2")                         // 2
console.log("3")                         // 3
console.log("4")                         // 4
console.log("5")                         // 5


// While loop and for loop

// While

// syntax:-  
// Print the condition 1-5

// while(condition) {
//    condition is not defined   
//             }

leti = 0
while(i<5){
    console.log(i)                    // 1,2,3,4,5
    i++
}



leti = 0
while(i<5){
    console.log(i)                    // 0,1,2,3,4,5 
    i=i+1
    }


if(5>10){
    console.log("hello world")        // No output is given
    }


if(5<10){
    console.log("hello world")         // hello world
    }


if(5>10){
    console.log("hello world")
       }
    else {
console.log('10 is greater than 5')     // 10 is greater than 5
    }   
        

i = 5
while(i<5){
    console.log(i)                      // 0 0 0 0 0 0 0.....& code is breaking 
}


i = 5
while(i>0){
    console.log(i)
    i = i-1                             // 5,4,3,2,1
    }


    i = 5
    while(i !=0)
    while(i){                           // 5,4,3,2,1
        console.log(i)
        i=i-1
    }


    i = 5
while(i !=0)
while(i){ console.log(i)                // 5,4,3,2,1
    i--
}


if(true)
    console.log("Hello world")          // Hello World


// {} curly brackets denotes block of codes.

if(true)
{
    console.log('hello world')          // hello world
console.log('hy there')                 // hi there
}


if(false)                              
console.log('Hello world')
console.log('Hi there')                 // Hi there


if(false){                              // No output is shown
console.log('Hello world')              
console.log('Hi there')
}


if(true){
    console.log('Hello world') ; console.log('Hi there')       // Hello world // Hi there
    }


// do while loop


let i = 0
do{
    console.log(i);                               // 0  1 2 3 4
    i++;
}while(i<5)
  
// ; is for end for our statement inupper case.

let x = 0
do{
    console.log(x);                               // 0 1 2 3 4
    x++;
}while(x<5)


// If we compare do while & while loop then same output will come.

let i = 0
do{
    console.log('the value of i',i);
    i++;
}while(i>5)
  


let x = 0
while(x>5){
    console.log('the value of x',x)                    
    x++
    }

// In the upper case the value of i 0 is output.


// For loop:-

for(let i =0; i <= 5; i = i + 1){                                // 0 1 2 3 4
    console.log(i)
}

for(let i =1; i < 5; i = i + 1){                                 // 1 2 3 4
    console.log(i)
}


for(let i =1; i <= 5; i = i + 1){                                // 1 2 3 4 5
    console.log(i)
}

  
// skip some part of the loop:-


// let i = 0;
for(; i <5;i++){                                                  // 0 1 2 3 4
    console.log(i)
}

// let i = 0;
for(; i<5 ;){                                                     // 0 1 2 3 4
    console.log(i++)
}


// Break the loop:-

let value = 1
let sum = 0
while(value<5){
    sum = sum + value                                            // 10
    value++
}
console.log(sum)

// let value = 1
// let sum = 0
while(value<5){                                                
    if(sum == 6){
        break                                                    // 6
    }
    sum = sum + value
    value++
}
console.log(sum)


for(let i = 0 ; i < 10 ; i++){
    if(i % 2 == 0){
        continue
    }                                                            // 1 3 5 7 9
    console.log(i)
    }




for(let i = 0 ; i < 10 ; i++){
    if(i == 2) continue                                       // 0 1 3 4 5 6 7 8 9            
        console.log(i)
        }




 for(let i = 0 ; i < 10 ; i++){
    if(i == 2) continue  
    if(i == 3) continue                                      // 0 1 4 5 6 7 8 9            
            console.log(i)
            }
    

 for(let i = 0 ; i < 10 ; i++){
    if(i == 2 || i == 3) continue                            // 0 1 4 5 6 7 8 9 
     console.log(i)
         }
            
































