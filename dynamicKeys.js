var keyName = ["name", "salary", "age"];

var newKey = "designation"

var Employee = {
    [keyName[0]]: "Mayank",
    [keyName[1]]: 10,
    [keyName[2]]: 1,
    [newKey]: "XYZ"
};

console.dir(Employee);
