
// question 1

function receivingFunction (WhatIsThis) {


}

// question 2 

const prizes =["bag og bananas", "box of frogs", "car og clowns"];

prizes.forEach (function(item) { 

    console.log(item)
});

//question 3

function countDown () {
    console.log("i waited 5 seconds before executing")
}

setTimeout(countDown, 5000);

//question 4

let count = 0;

const intervalId = setInterval(function() {

    count++;

    if(count === 4) {
        clearInterval(intervalId);
    }

    console.log(count);

}, 1500);
