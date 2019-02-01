var stringLiteral = {
    name: "StringLiteral",
    age: 100
}

function Employee(name, age) {
    this.name = name;
    this.age = age;

    this.showName = function() {
        alert(this.name);
    }

    this.showAge = function() {
        alert(this.age);
    }
}

var userData = new Employee("Mayank", 10);

// Using Bind Keyword

var functionReference = userData.showName.bind(stringLiteral);

functionReference();

// Using Call Keyword

userData.showName.call(stringLiteral);