function iterate() {

    let data = "Mayank";

    for(let i=0; i<10; i++) {
        data = data + "1";
    }

    if(data.indexOf("Mayank") == 0) {
        var myData = "Demmo";
    }

    function otherData() {
        console.log(myData);
    }

    otherData();

    return {
        data: data
    }
}

var dataOutput = iterate();

console.log("Data: " + dataOutput.data);

// Block Scope Variable are not Hoisted..