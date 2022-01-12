const fibonacci = function(number){
    //this condition convert any negative number to positive number
    var posNum = (number < 0)? number * -1 : number;
   
        if(posNum <=2){
            return 1;
        }else{
            return fibonacci(posNum - 1) + fibonacci(posNum - 2);
        }};
  
   

    console.log("Fibonacci of 30 is "+ fibonacci(30));

    console.log("Fibonacci of -15 is "+ fibonacci(-15));
