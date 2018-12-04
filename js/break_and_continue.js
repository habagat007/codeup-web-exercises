"use strict";


var userInput = prompt(" pls input any number between 1 to 50 ");
if (Number(userInput) <= 50) {
  for (var i = 1; i < 50; i++) {
        if (i % 2 == 0) {
            continue;

        }
        console.log('here is an odd number: ' + i);
        if (userInput = i)
            alert('need to skip this number ' + i);
  }

}else{
    do {
        var userInput = prompt(" pls input any number between 1 to 50 ");

    }while(!Number(userInput) && Number(userInput) <= 50);
}