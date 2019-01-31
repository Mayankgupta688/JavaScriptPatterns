// Defining a Constructor Function

function Employee (name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
}
  
Employee.prototype.showDetails = function() { 
      console.log("Name: " + this.name + " Age: " + this.age);
}
  
Employee.prototype.showName = function() {
    console.log("Name: " + this.name);
}

Employee.prototype.showDesignation = function() {
    console.log("Name: " + this.designation);
}

var myEmployee = new Employee("Mayank", 28, "Developer");
var myEmployeeOne = new Employee("Mayank", 28, "Developer");
var myEmployeeTwo = new Employee("Mayank", 28, "Developer");

myEmployee.showName();

myEmployeeOne.showName();

myEmployeeTwo.showName();