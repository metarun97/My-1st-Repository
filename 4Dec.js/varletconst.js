/ Difference between let,var & const:-

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

function x(){
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


