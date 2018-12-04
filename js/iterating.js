(function(){
    "use strict";

    /**
     *
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Peter" , "Paul", "Mary", "Joseph"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log('number of items in the array is ' + names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
     console.log(names[0]);
     console.log(names[1]);
     console.log(names[2]);
     console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++){
        console.log('the name in the '+ i +' array is ' + names[i]);
   }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
     names.forEach(function(element,index,array){
       console.log('Tha name in index '+ index + " is " + element);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
//var a = ['a',3,true,'d'];

   function firstElement(i) {
       return i[0];


   }

    function secondElement(i){
        return i[1];
    }

    function thirdElements(i){
        return i[i.length-1];
    }

    console.log(firstElement(names));
    console.log(secondElement(names));
    console.log(thirdElements(names));


})();


//more practice from slack

//oneHundred

function oneHundred(input){
    var numOneHun = [];

    for (var i = 0; i <= 99; i++){
        numOneHun[i] = i + 1;

    }

    return numOneHun;

}
 console.log(oneHundred());


//reverse
var rarr = oneHundred();
 function rev(input){
     var output = [];
       for (var i = input.length-1; i >= 0; i--){
           output.push(input[i]);

       }

       return output;
 }
console.log(rev(oneHundred()));

//sumall

function sumAll(numbers){
var sum = 0;
numbers.forEach(function(number){
    sum = sum + number;

    });
return  sum;
}
console.log(sumAll(oneHundred()));

//multiall
function multiplyAll(numbers){
    var prod = 1;
    numbers.forEach(function(number) {
     prod *=number;
    });
    return prod;
}
console.log(multiplyAll(oneHundred()));

console.log(multiplyAll([1,2,3,4,5,6,7,8,9,10]));