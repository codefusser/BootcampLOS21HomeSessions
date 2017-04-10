/*
	This mini-project demonstrates how to implement function object as a class in a real world senario
	Class Features demonstrated are as follows:
	Atributes (Properties)
	Encapsulation
	Inheritance
	Polymorphism is a generic property for Javascript function, because a function could act on multiple number of arguments 
	depending on how its invoked.
*/

//First define an empty function

let EmployerDetails = function() { };

//use the prototype keyword to set properties of the function object

//employerDetail property 1

EmployerDetails.prototype.empDetail = {
  empName : "XYZ Inc",
  departments : ["Admin", "Accounting", "Recruitment", "Engineering", "Sales", "Marketing", "Information Technology"],
  empAddress : "123, stroll road, surrey"
  
};

//employerDetail property 2 (first method)
EmployerDetails.prototype.getEmployerInfo = function() {
	let empInfo = [];
	empInfo = [this.empDetail.empName, this.empDetail.departments, this.empDetail.empAddress];
	return empInfo;
}

//definition of a subclass
let Employee = function() {
	this.employeeName = "member1";

	//this is encapsulation (data hiding), using closure, only 'em' method knows what is happening and could change the name of the employee
	let em = function () {
		this.employeeName = 'newMember';
		return this.employeeName;
	}
  
  //first method for subclass
  this.employeeInfo = function() {
    return this.employeeName + ", " + this.empDetail.empName + ", " + this.empDetail.departments[6];
  };
};

//extending the properties of a superclass object (employerDetails) to subclass object (employee)
Employee.prototype = new EmployerDetails();

///note that, this is only unidirectional, if you want the super class to be able to access the sub class you must declare its prototype as an object
//EmployerDetails.prototype = new Employee();

//create new instances of the objects
let emp2 = new Employee();
let emp = new EmployerDetails();


//access the properties using the different objects
console.log(emp.empDetail.empName);
console.log(emp2.empDetail.empName);


//To show inheritance
console.log(emp2.empDetail.empName);
console.log(emp2.getEmployerInfo());

//To show encapsulation (hide the property in a function and that is closure in concepts)
console.log(emp.employeeName);

//but it is accessible inside the property
console.log(emp2.employeeInfo());
//console.log(emp.employeeInfo());
