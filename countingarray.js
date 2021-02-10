"use strict";
console.log("JS kickin'");

const arr = [];
let count = 0;


addToArrey(); // Initiates the program and makes sure

function addToArrey() {
    arr.unshift(count); // Add count value as element to beginning of the array
    count++;
    console.log(arr);
    if (arr.length > 8) { // If arr length exceeds 8 elements 
        //arr.length = 8; // Use set length to 'cut off' elements beyond length
        arr.pop();         // OR just pop the last element
    }
    setTimeout(addToArrey, 1000);
}