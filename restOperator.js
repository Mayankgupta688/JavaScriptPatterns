var dataOne = callSum(1, 2, 3);
var dataOne = callSum(1, 2, 3, 4);
var dataOne = callSum(1, 2, 3, 5, 6);

// 1, 2, 3 => [1, 2, 3]

function callSum(...args) {
    console.log(args.length);
}

function callSumOther() {
    console.log(arguments.length);
}

// Arguments is a keyword