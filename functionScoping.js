function iterate() {

    var data = "Mayank";

    for(var i=0; i<10; i++) {
        data = data + "1";
    }

    function otherData() {
    
        // Will "i" be accessible Here ? Yes...

        console.log(i);
    }

    otherData();
}

iterate();

// Function Hoisting..

// Scope of Variable Lies Inside Function where it was created...