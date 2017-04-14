'use strict'

module.exports = {

 /* Find the average of three integers */
    fizzBuzz : function(num){
        var divisibleBy3 = 'Fizz';
        var divisibleBy5 = 'Buzz';
        var divisibleBy3n5 = 'FizzBuzz';

        if(typeof num === "number"){
            if(num%3 === 0 && num%5 !== 0){
                return divisibleBy3;
            }
            if(num%5 === 0 && num%3 !== 0){
                return divisibleBy5;
            }
            if(num%3 === 0 && num%5 === 0){
                return divisibleBy3n5;
            }else
                return num;
        }
    }
}


