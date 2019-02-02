function myIteration(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

    console.log(arguments[4]);
}

var myArray = [1, 2, 3, 4, 5, 6];

var array = [1, 2]

myIteration(...array);