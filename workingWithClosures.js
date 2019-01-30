function userInfo() {
    var name = "Mayank";
    var age = 1;
    var salary = 10;

    var showData = function() {
        alert("Name: " + name + " Age: " + age);
    }

    var showIncrementedSalary = function() {
        alert(salary);
    }

    return {
        showData: showData,
        showIncrementedSalary: showIncrementedSalary
    }
}

var returnData = userInfo();


// Salary is private to "userInfo". Support Encapsulation..
console.log(returnData.salary);

// This function is available from the Module Pattern.
returnData.showData()