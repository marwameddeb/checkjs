///////////   func1  /////////

function factorial(number){
    if (number === 0 || number===1) { 
            return 1 
        } 
     return number * factorial( number - 1 ) 
    }
    undefined
    factorial(5)
    120

    ///////////   func2  /////////

    function primer(number){

        for (var i = 2; i <= Math.sqrt(number); i++) {
       if (number % i === 0) {
   
         return false;
       }
     }
     return true;
   }
   undefined
   primer(6)
   false
   primer(2)
   true
   primer(5)
   true

     ///////////   func3  /////////

     function FibonacciSequence(){
        var number = parseInt(prompt('Enter the number of terms: '));
    var n1 = 0, n2 = 1, nextTerm;
    
    console.log('Fibonacci Series:');
    
    for (var i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    }
    undefined
    FibonacciSequence()
    VM3535:5 Fibonacci Series:
    VM3535:8 0
    2VM3535:8 1
    VM3535:8 2
    