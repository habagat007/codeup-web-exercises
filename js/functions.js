"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

 function sayHello(name) {

     return alert("Hello " + name + "!");

 }

sayHello("bob");
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage ="owen";
    sayHello(helloMessage);
console.log("this is the helloMessage : " + helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName ="owen";
sayHello(myName);
console.log ("this is myName line :" + myName);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
var number = random;
console.log ("the random number is " + number);
function isTwo(number) {
    if (number == 2) {
        return true;
    }
    else{
        return false;

    }


}


console.log("boolean value " + isTwo());
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

function calculateTip() {
    var totalbill = prompt("what is your total bill?");
    var howmuchtip = prompt("how many percentage of tip you will give?");
    var percenttip = parseInt(howmuchtip) / 100;
    var totaltip = parseInt(totalbill) * percenttip;
    var totaldue = totaltip + parseInt(totalbill);
    alert("total bill is $" + totaldue.toFixed(2) + " with a tip of $" + totaltip.toFixed(2));

    return totaltip;


}
console.log("the total tip is $" + calculateTip().toFixed(2));
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */ function applyDiscount(a,b) {


     var totaldiscount = discount / 100 ;
     var totalafterdiscount = price * totaldiscount;
     alert("tota discount is $" + totalafterdiscount.toFixed(2));
     return

}

var price = prompt("how much is the price?");
var discount = prompt("how is the discount");

applyDiscount( price,discount);

console.log('total price and discount ' + applyDiscount());