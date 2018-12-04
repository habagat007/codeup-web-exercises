"use strict";


// function for Odd or even
function myOdEven() {
    alert("Welcome to isOdd/isEven function drill");
    var picknum =  prompt("pls pick any whole number");
    var oddeven = parseInt(picknum % 2);
    if (oddeven == 1) {
        return alert("The number that you entered is Odd, this is your number ---> " + picknum);
    } else {
        return alert("This number is Even --- >" + picknum);

    }

}

// function five, will tell you if you the number you enter is 5

function Five(){
    alert("Welcome to FIVE function drill");
    var fives = prompt("pls enter any number from 1 to 5");
    if (fives === 5){
        return alert("bingo! you entered number 5");
    }
    else{
        return alert("The number you entered is " + parseFloat(fives));
    }
}


// Function addFive

function addFive(){
    alert("Welcome to ADDFIVE function drill");
    var plusfive = prompt("pls enter any number then i will add 5 on it");
    if (!isNaN(parseFloat(plusfive))) {
        var total = parseFloat(plusfive) + 5;
        return alert("you entered " + plusfive + " then I add 5 total is " + total);

    } else{
        return alert("pls refresh and enter a number");
    }
}

//function multiple of five

function MultiFive(){
    alert("Welcome to Multiple Of Five function drill");
    var timesfive = prompt("pls enter any number then i will multiply it by 5");
    if (!isNaN(parseFloat(timesfive))) {
        var total1 = parseFloat(timesfive) * 5;
        return alert("you entered " + timesfive + " then I multiply it by 5 total is " + total1);

    } else{
        return alert("pls refresh and enter a number");
    }
}

// function Multiple of Three and Five input

function MultiFiveandThree(){
    alert("Welcome to Multiple Of Five and Three function drill");
    var timesfiveandthree = prompt("pls enter any number then i will multiply it by 5 and 3");
    if (!isNaN(parseFloat(timesfiveandthree))) {
        var total2 = parseFloat(timesfiveandthree) * 5;
        var total3 = parseFloat(timesfiveandthree) * 3;
        return alert("you entered " + timesfiveandthree + " then I multiply it by 5 total is " + total2 + " then I multiply it by 3 -->" + total3);

    } else{
        return alert("pls refresh and enter a number");
    }
}

// function multipleOf(target,n)

/*function MultiOf(){
    alert("Welcome to Multiple Of (target,n) ");
    var target = prompt("pls enter any number target number ");
    var numvi = prompt("pls enter another number ");

    if ((!isNaN(parseFloat(target) && (!isNan(parseFloat(numvi)){
        var total5 = parseFloat(timesthree) % numvi;
          if(total5 === 0){
              return alert("Your first number is " + target + " is divisible by your second number " + numvi);
          }else {
              return ("The first number you entered is " + target + " is not divisible by the second number ");
          }


    } else{
        return alert("pls refresh and enter a number");
    }
}

}*/

// function Multiple of Three

function MultiThree(){
    alert("Welcome to Multiple Of Three function drill");
    var timesthree = prompt("pls enter any number then i will multiply it by 3");
    if (!isNaN(parseFloat(timesthree))) {
        var total4 = parseFloat(timesthree) * 3;
        return alert("you entered " + timesthree + " then I multiply it by 3 total is " + total4);

    } else{
        return alert("pls refresh and enter a number");
    }
}

//function isConsonant

function isconsonant() {
    alert("Welcome to Is Consonant function");
    var consletr = prompt("pls pick any letter ");
    var locase = consletr.toLowerCase();
      if (locase == 'a' || locase == 'e' || locase == 'i' || locase == 'o' || locase == 'u') {
          return alert(" the letter you entered is " + consletr + " and its a vowel");
      } else{
          return alert("the letter you entered is " + consletr + " and its a consonant");
      }

}

//function Degree to Radians conversion

function DegRad() {
    alert("Welcome to Degree to Radian conversion Function");
    var degreenum = prompt("pls enter any number in Degree  ");
    var torad = parseInt(degreenum);
      var radnum = torad * 0.0174533;
      return alert ("you enter " + degreenum + " equavalent in  Radian is " + radnum.toFixed(3) + "radian");


}

//function is Vowel

function isvowel() {
    alert("Welcome to Is Vowel function");
    var consletr = prompt("pls pick any letter ");
    var locase = consletr.toLowerCase();
    if (locase == 'a' || locase == 'e' || locase == 'i' || locase == 'o' || locase == 'u') {
        return alert(" the letter you entered is " + consletr + " and its a vowel");
    } else{
        return alert("the letter you entered is " + consletr + " and its a consonant");
    }

}

//function Radian to Degree

function RadDeg() {
    alert("Welcome to Radian to Degree conversion Function");
    var degreenum = prompt("pls enter any number in Degree  ");
    var torad = parseInt(degreenum);
    var radnum = torad * 57.2958;
    return alert ("you enter " + degreenum + " equavalent in  Degree is " + radnum.toFixed(3) + "degree");


}

//function are Identical

function areIdentical(){
    alert ("Welcom to areIdentical function, pls enter 2 values");
    var value1 = prompt("Pls enter your first value");
    var value2 = prompt("pls enter your second value");
     if (value1 === value2){
         return alert ("the value that you enetered are the same, your first input was " + value1 + " and your second input was " + value2);
     }else {
         return alert("the value you entered are not the same, your first input was  " + value1 + "  and your second input was " + value2);
     }
}

// SIMPLE FUNCTION DRILL

// return two function

function returnTwo(){
    alert ("welcome to return two");
    var numofTwo = 2;
    return alert("this function will return number 2 when called and here's your number two " + numofTwo);
}

//testing return two in console log

function returnTwo2(){
    alert ("welcome to return two");
    var numofTwo = 2;
    console.log ('here is your number ' + numofTwo);
    return alert("this function will return number 2 when called and here's your number two " + numofTwo + " will also display this number in your console ");
}

// function howdy

function howdy() {
    var charhow = "howdy!"
    alert ("welcome to function howdy ");
    alert ("check your console ");
    return console.log (charhow);

}


// funtion return name

function returnName() {
    alert("welcome to function retun name");
    var myname = prompt("pls enter your name ");
    var namestr =String(myname);
    return alert ("Hi " + namestr + "!");

}

//function identity input
/*alert ("welcome to identity input");
var identity = prompt("pls enter anything ");
function identityInput(abc){
    return abc === true;
    identityInput(identity);
}*/


function isTrue() {
    alert("welcome to is True");
    var boltrue = prompt("pls enter any boolean");
    return boltrue == true;

}




