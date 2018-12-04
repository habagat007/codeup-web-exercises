(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
   var person = {
       "firstName": "Owen ",
        "lastName": " Martin",
        "sayHello": function(){
           return console.log ("Hello from " + person.firstName + person.lastName);
       }
   };
  person.sayHello();

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
   // console.log(person.sayHello()); ******


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var discount = 0;
    var amountB4dscnt = 0;
        shoppers.forEach(function (shoppers) {
            if (shoppers.amount > 200) { // instead of using if statement "(shopper.amount >= 200) ? client.amount * 0.12 : 0;"
                discount = shoppers.amount - parseFloat(.12 *shoppers.amount); //
                console.log('Shopper ' + shoppers.name + ' amount before  discount is $' + shoppers.amount + ' the amount after discount is $' +discount);
            }

        }


);




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */






// * Create an array of objects that represent books and store it in a
//     * variable named `books`. Each object should have a title and an author
//     * property. The author property should be an object with properties
//     * `firstName` and `lastName`. Be creative and add at least 5 books to the
//     * array

    var books = [
            { "Tittle":"The Holy Bible",
              "AuthorProperty": {
                "firstName": "God ",
                "lastName": "Almighty"
            }
           },
            {
                "Tittle": "El Filibusterismo",
                "AuthorProperty": { // you can also use another external object here like the person u created
                    "firstName": "Jose ",
                    "lastName": " Rizal "
                }
            },

            {
                "Tittle": "Noli Me Tangere",
                "AuthorProperty": {
                    "firstName": "Jose ",
                    "lastName": " Rizal "
                }
            },
            {
              "Tittle": "Noli Me Tangere",
              "AuthorProperty":{
                  "firstName": "Jose ",
                  "lastName": " Rizal "
              }
            }
];




    // var a =  prompt('Pls enter the book Tittle');
    // var b =  prompt('Pls enter the book Author First Name');
    // var c =  prompt('Pls enter the book Author Last Name');
    // var d = createBook(a,b,c);

   // books.unshift(newbuk); // this is undefined

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
 // for (var i = 0; i < books.length; i++){// books.forEach(function(book,index){ console.log(
 //     console.log(books[i]);
 // }

    books.forEach(function(book,index){
        console.log('book # ' + (index + 1));
        console.log ('tittle ' + books.title);
        console.log('author ' + books.AuthorProperty.firstName + books.AuthorProperty.lastName);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

   function createBook(tittle,author) {
      return {

      }
    }



// var newbuk = {};
//
//     newbuk.createBook =function (authorfirst,authorlast,tittle){
//
//         if (!String(authorfirst) || !String(authorlast) || !String(tittle)) {
//             this.Tittle = tittle.toString();
//             this.AuthorName = authorfirst.toString();
//             this.AuthorLastName = authorlast.toString();
//             return newbuk;
//
//         }else{
//             newbuk.Tittle = tittle;
//             newbuk.AuthorName = authorfirst;
//             newbuk.AuthorLastName=authorlast;
//             return newbuk;
//         }
//
//
//
//     }

// var showBookInfo = prompt("Enter any book tittle or Author's Name");
//  if (typeof String(showBookInfo)){
//      createBook();
//      if (showBookInfo === books.Tittle || showBookInfo === books.AuthorName){
//          books.forEach(function(book){
//            return  console.log();
//          })
//      }
//
//  }else {
//      return console.log("pls refresh the page and enter the correct value");
//  }
//
// // BONUS 2 (expanding on the books object exercise):
// // Add a property "keywords" that contains an array of possible genres the book may be categorized by
// // Add a boolean property "available" and set it to true
// // Add a dateAvailable property that has a string of the date/time when the book will be available
// // Add a method lend() that...
// // - changes the available property to false if it is not already false
// // - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
// // (to do this, research the JS Date object and use methods from it in your code)
// // Add a method receive() that...
// // - changes the available property to true
// // - changes the dateAvailable property to the string "now"
// // BONUS 3 (expanding on the books object exercise):
// // Create an application to take in user input to build the books array of objects.
// //     Allow the user to continue adding books or to finish adding books.
// //     Once the books have been added, output the books array in the console.
// //     Allow a user to delete a book or a group of books by title or author last name
// // Allow a user to edit a book by index number in the books array
 })();
