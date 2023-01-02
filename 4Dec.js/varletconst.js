// Difference between let,var & const:-

//      (INPUT)                                  (OUTPUT)

function x(){
    a = 20
    console.log(a)                              // 20
}
x()


function x(){
    a = 20
}                                              // 20}
x()
console.log(a)


function x(){
    var a = 20
}                                              // a is not defined
x()
console.log(a)


// From let a = 20 then it is                  //   (20)
// From const a = 20 then it is                //   (20)


// var a = 20

// function x(){
    console.log(a)                             //    (20)                                   
}
x() 
 


function x(){
    function y(){
        function z(){
             a = 20                            //     (20)
        }
        z()                              
    }
   y()
}
x()
console.log(a)



function x(){
        function y(){
            function z(){
                var a = 20
            }
            z()                                // a is not defined
        }
       y()
    }
    x()
    console.log(a)


 function x(){
        function y(){
            function z(){
                const a = 20 // It's scope is limited.
            }                                                 // a is not defined(error)
            z()                              
        }
       y()
       console.log(a)
    }
    x()


    var b = 200
    function x(){
        function y(){
            function z(){
                const a = 20 // It's scope is limited.
                console.log(b)                               // 200
            }
            z()                              
        }
       y()
    }
    x()
   

    function x(){
        var b = 200
        function y(){
            function z(){
                const a = 20 // It's scope is limited.
                console.log(b)                              // 200
            }
            z()                              
        }
       y()
    }
    x()

    // Note=> Because of it is the lexical scope then it gives output.

    function x(){
        function y(){
            function z(){
                const a = 20 // It's scope is limited.
                console.log(b)
            }
            z()                                            // undefined
        }
       y()
    }
    x()
    var b = 200

// It is called as lexical chaining.


// Hoisting is a phenominan where can get the value of function,classes,variables even,before executing the code.

    console.log(a)                                         // undefined
    var a = 100                

    console.log(a)                                     
    let a = 100                                           //  ReferenceError: Cannot access 'a' before initialization


    console.log(a)                                     
    const a = 100                                        //  ReferenceError: Cannot access 'a' before initialization

    b()
    function b(){                                        // It is also hoisted
        
    }                                       

// Note=> The time from which you can't use a variable declare by let let or const till the time it is initialized.


// {} curly brackets:- When someone ask you that  what is the say that curly brackets.

// Var is a function scope where as let and const are blocked scope.


var a = 10
{
    var a = 20
    console.log(a)                                       // 20
}

let a = 10
{
    let a = 20                                           // 10
}
console.log(a)


var a = 100
function x(){                                            // 200
    var a = 200
    console.log(a)
}
x()


 const a = 10
a = 20
console.log(a)                                           // TypeError: Assignment to constant variable.





