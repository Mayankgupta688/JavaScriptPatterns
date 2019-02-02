var name1 = "Anshul";

var myObj = {
    name1: "Ankit"
}

function Employee(name) {
    this.name1 = name;
}

Employee.prototype.showName = function() {
    alert(this.name1)
}

var a = new Employee("ABC");

//a.showName()

var b = new Employee("BBC");

//b.showName()

b.showName.call(b);
b.showName.call(a);
b.showName.call(myObj);

