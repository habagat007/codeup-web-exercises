"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var wantToEnter = confirm("Do you want to enter a number?");

if (wantToEnter){
    var number = prompt("Enter your number");



var xy = number;

var oddNum = xy % 2;

if (oddNum === 1){
	alert("the number you entered is odd " + parseInt(oddNum));
}
else {
	alert("the number you entered is even " + parseInt(xy));
}
 var NumPlus = parseInt(xy) + 100;
 alert (NumPlus + " this is your number plus 100");

 if (xy > 0){
 	alert("The number you entered is positive " + parseInt(xy));
 } else {
 	alert("The number you entered is negative " + parseInt(xy));
 }


}
else{
    alert ("thank you!");
}
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
 function analyzeColor(pickcolor){
 	 pickcolor = pickcolor.toLowerCase();
 	
 	 if (pickcolor === 'red'){
 	 	return alert("Strawberries are RED,  you picked " + enteredColor);
 	 } 
 	  else if (pickcolor === 'blue') {
 	  	return alert("Sky is BLUE , you picked " + enteredColor);

 	 } 
 	   
 	 else {
 	 	return alert("I dont know that color " + pickcolor);

 	 }

 }

 var enteredColor = prompt("pick one, red or blue");
 analyzeColor(enteredColor);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */ 
    function passedRandom(pascolor){
 	console.log("the color is " + randomColor);
 	alert("the random color is " + randomColor);
 }

 passedRandom(randomColor);
 console.log(" switch case part :Random color is " + randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */ var ranColor = randomColor;
     switch(ranColor){
     	case 'red':
     		alert("the random color is red");
     		break;
     	case 'orange' :
     	    alert("the random color is orange");
     	case 'yellow':
     		alert("the random color is yellow");
     		break;
     	case 'green' :
     	    alert("the random color is green"); 
     	case 'blue':
     		alert("the random color is blue");
     		break;
     	case 'indigo' :
     	    alert("the random color is indigo");  
     	case 'violet':
     		alert("the random color is violet");
     		break;
     	default:
     	    alert("the random color is not in the list" + ranColor);         
     }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var usercolor = prompt("pls enter any color ");
analyzeColor(usercolor);




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
 var totalamount = prompt("what is your total amount?");
   var amount = parseFloat(totalamount);
 
function calculateTotal(numLuck){
	
	/**switch(Numentered){
		case 0 :
		    return  alert("sorry you have to discount, your lucky number is unlucky " + Numentered);
		    break;
		case (1):

		   var totaldisc = totalamount * .10;
		   var totaldue = totalamount - totaldisc;
		    return  alert(" Congratulation, your total discount is $" + totaldisc.toFixed(2) + " and your total due is now $" + totaldue.toFixed(2));
            break;
        case (2) :

		   var totaldisc = totalamount * .25;
		   var totaldue = totalamount - totaldisc;
		     return alert(" Congratulation, your total discount is $" + totaldisc.toFixed(2) + " and your total due is now $" + totaldue.toFixed(2));
           break;
        case (3):

		   var totaldisc = totalamount * .35;
		   var totaldue = totalamount - totaldisc;
		    return alert(" Congratulation, your total discount is $" + totaldisc.toFixed(2) + " and your total due is now $" + totaldue.toFixed(2));
        case (4) :

		   var totaldisc = totalamount * .50;
		   var totaldue = totalamount - totaldisc;
		     return alert(" Congratulation, your total discount is $" + totaldisc.toFixed(2) + " and your total due is now $" + totaldue.toFixed(2));
	    default :

		   
		    return  alert(" Congratulation, your lucky number is 5, your total due is 100% free ! ");

	}*/

	if (numLuck === 0){
		return  alert("sorry you have no discount, your lucky number is  " + Numentered);
	}
	else if (numLuck=== 1){
        var totaldisc = totalamount * .10;
		   var totaldue = totalamount - totaldisc;
		    return  alert(" Congratulation, your total discount is $" + totaldisc.toFixed(2) + " and your total due is now $" + totaldue.toFixed(2)); 

	}
	else if(numLuck === 2){
		var totaldisc = totalamount * .10;
		   var totaldue = totalamount - totaldisc;
		    return  alert(" Congratulation, your total discount is $" + totaldisc.toFixed(2) + " and your total due is now $" + totaldue.toFixed(2));

	}

	else if(numLuck === 3){
        var totaldisc = totalamount * .35;
		   var totaldue = totalamount - totaldisc;
		    return alert(" Congratulation, your total discount is $" + totaldisc.toFixed(2) + " and your total due is now $" + totaldue.toFixed(2));
	}

	else if(numLuck === 4){
		var totaldisc = totalamount * .50;
		   var totaldue = totalamount - totaldisc;
		    return alert(" Congratulation, your total discount is $" + totaldisc.toFixed(2) + " and your total due is now $" + totaldue.toFixed(2));
	}
	else{
		return  alert(" Congratulation, your lucky number is 5, your total due is 100% free ! ");
	}





}

 var luckyNumber = prompt("what is your lucky number?");
var luckNum = parseFloat(luckyNumber);
 calculateTotal(luckNum);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalamount = prompt("what is your total amount?");
calculateTotal(luckyNumber);
aler("your lucky number is " + luckyNumber);






















