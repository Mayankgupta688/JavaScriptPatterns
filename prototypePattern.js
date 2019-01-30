var Employee = (function(){

    var name = "Mayank";
    var salary = 0;
    var tax = 0;
  
    function setDetails(name, salary, tax) {
      name = name;
      salary = salary;
      tax = tax;
    };
  
  
    function getDetails(name, salary, tax) {
      console.log(name + salary + tax);
    };
  
    function calculateBonus() {
      return salary * .1;
    }
  
    function netSalary() {
      return salary + (salary * .14);
    }
  
    return {
      name: name,
      getDetails: getDetails,
      setDetails: setDetails,
      calculateBonus: calculateBonus,
      netSalary: netSalary
    }
  
})();


alert(Employee.getDetails());

// Accessing the following property shall give user an Error bcoz its local to the block.
console.log(Employee.salary);