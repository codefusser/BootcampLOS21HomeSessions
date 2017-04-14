/*
	This mini-project demonstrates how to implement function object as a class in a real world senario
*/

//First define an empty function
'use strict'

let employerDetails = function() { };

//use the prototype keyword to set properties of the function object

//employerDetail property 1

employerDetails.prototype.empDetail = {
  empName : "XYZ Inc",
  departments : ["Admin", "Accounting", "Recruitment", "Engineering", "Sales", "Marketing", "Information Technology"],
  empAddress : "123, stroll road, surrey"
  
};

//employerDetail property 2 (first method)
employerDetails.prototype.getEmployerInfo = function() {
	let empInfo = [];
	empInfo = [this.empDetail.empName, this.empDetail.departments, this.empDetail.empAddress];
	return empInfo;
}

//definition of a subclass
let employee = function() {
	this.employeeName = "";

	//this is encapsulation, using closure

	//set the name of the method of with a setter method
	this.setName = (empName) => {
		this.employeeName = empName;
	}

	//Retrieve the name of the employee with the getter method
	this.getName = () => { return this.employeeName; }
  
  //first method for subclass
  this.employeeInfo = function() {
    return this.employeeName + ", " + this.empDetail.empName + ", " + this.empDetail.departments[6];
  };
};

//extending the properties of a superclass object (employerDetails) to subclass object (employee)
employee.prototype = new employerDetails();

///Note, this is only unidirectional, if you want the super class to be able to access the sub class you must declare its prototype as an object
//employerDetails.prototype = new employee();

//create new instances of the objects
let emp2 = new employee();
emp2.setName("akin");
console.log(emp2.getName());
let emp = new employerDetails();


//access the properties using the different objects
console.log(emp.empDetail.empName);
console.log(emp2.empDetail.empName);


//To show inheritance
console.log(emp2.empDetail.empName);
console.log(emp2.getEmployerInfo());

//To show encapsulation (hide the property in a function and that is closure in concepts)
console.log(emp.employeeName);
console.log(emp2.employeeName);

//but it is accessible inside the property
console.log(emp2.employeeInfo());
//console.log(emp.employeeInfo());
