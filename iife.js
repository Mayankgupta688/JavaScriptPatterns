(function() {
    var userInput = "Mayank";

    var showUserData = function() {
        console.dir(userInput);
    }

    showUserData();
})

// The following Variable and Function will be undefined after the IIFE Block
console.log(userInput);

// The following function is not available outside the Scope of IIFE
showUserData()