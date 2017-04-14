'use strict'

module.exports = {

 /* Find the average of three integers */
	aritGeo : function(){
  		if (arguments.length === 0){
    		return 0;
  		}

  		if (arguments.length <= 2){
    		return -1;
  		}
    
    	if (arguments.length >= 3){    		
    		let firstNumber = Number(arguments[0]);
  			let commonDiff = Number(arguments[1]) - Number(arguments[0]);
  			let commonRatio = Number(arguments[1]) / Number(arguments[0]);  			
  			let argLength = Number(arguments.length); 
  			

  			let d = 0;
  			let nthTerm = 2; 
  
    	for (let i=2; i < argLength; i++){
    		nthTerm += 1;
    		if (Number(arguments[i]) === Number(firstNumber) + (nthTerm - 1) * commonDiff) {
    	  		return "Arithmetic";
    		}
    		if (Number(arguments[i]) === firstNumber * Math.pow(commonRatio, nthTerm-1)) {
      			return "Geometric";
    		}
    	}
	    
  	}
	  return -1;
	}
}
