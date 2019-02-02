// Arrow Function

var name = "Anshul";

function Employee(name, age) {
    this.name = name;
    this.age = age;

    this.showDetails = () => {
        console.log(this.name);
    }

    this.showOtherDetails = function() {
        alert(this.age)
    }
}


var myEmp = new Employee("Mayank", 10);

var functionReference = myEmp.showOtherDetails;

functionReference();