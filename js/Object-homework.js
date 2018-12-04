// // BONUS 1 (create a dog object):
// var dog = {};
//     dog.breed= "German Sheperd";
//     dog.weightInPounds = 30;
//     dog.age = 1;
//     dog.color ="golden brown";
//     dog.sterilized = false;
//     dog.shotRecords = [
//         {
//             "date": "December 3, 2017",
//             "typeOfShot": "Anti-Rabies"
//         }
//     ];
//     dog.methods = [
//         {
//             "bark": function () {
//                 console.log('WOOF!');
//             }
//
//         },
//         {
//             "getOlder": function () {
//                 this.age++;
//             }
//         },
//         {
//             "fix": function () {
//                 dog.sterile = true;
//             }
//
//         },
//         {
//             "vaccinate": function (newdate,newvac) {
//
//                 if(String(newdate) && String(newvac)) {
//                    this.shotRecords.date = newdate;
//                    this.shotRecords.typeOfShot = newvac;
//                }
//             }
//         }
//
//         ];
//
//
//
//
//
//
//
//
//
// // The dog object should have properties for:
// // breed (string),
// //     weightInPounds (number),
// //     age (number),
// //     color (string),
// //     sterilized (boolean),
// //     shotRecords (array of objects with properties for date and typeOfShot)
// // The dog object should have methods to:
// //     bark() - will console.log "Woof!"
// // getOlder() - will increase age by 1
// // fix() - will set sterile to true if dog sterilized property is false
// // vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array
// // ********************************************
//
// Define an object called jackBox.
// var jackBox = {};
// //     Include properties for...
// // triggered - whether or not the box has been sprung (should be false by default)
// // intervalId - set to null
// // play() - once called, if triggered is false, console.log one new element in the lyrics array every second
// jackBox.triggered = false;
// jackBox.intervalId = null;
//
// // after the lyrics, stop the interval, set the triggered property to true, and alert POP!
// //     windUp() - once called will stop the play() method and set triggered to false
//  jackBox.lyrics = [  //- an array with the following elements:
//     "All a-...",
//         "-round the ...",
//         "mulberry...",
//         "bush, The...",
//         "monkey...",
//         "chased the...",
//         "wea-...",
//         "-sel...",
//         "The monkey...",
//         "stopped to...",
//         "pull up his...",
//         "sock,...",
//         "Pop!...",
//         "goes the...",
//         "wea-...",
//         "-sel."
//     ];
// jackBox.play = function () {
//     jackBox.triggered = false;
//     for(var i = 0; i < jackBox.lyrics.length; i++ );
//     return  console.log(jackBox.lyrics[i]);
// };
// jackBox.play();
//
// When running, current lyrics should also be displayed on the page.

//*****************************

// BONUS 2: Build a Stop Watch
// Define an object called stopWatch.
//     Include the following properties...
// intervalId
// count
// Include the following methods...
// start() - starts console logging an increasing count every second
// pause() - pauses counter
// reset() - stops counter and resets count to zero
//
// Test in console first then transfer to browser


function startTimer(m,s)
{
    document.getElementById('timer').innerHTML= m+":"+s;
    if (s==0)
    {
        if (m == 0)
        {
            return;
        }
        else if (m != 0)
        {
            m = m-1;
            s = 60;
        }
    }
    s = s-1;
    t=setTimeout(function(){startTimer(m,s)},1000);
};
 function myReset(){
     clearInterval(startTimer(0,0));
 }








// var stopWatch = {};
//
// stopWatch.intervalId = setInterval(1000);
// stopWatch.count = 100;;
// stopWatch.stopIt = function(){
//     clearInterval(stopWatch.intervalId);
// }
// stopWatch.start = function(){
//    var tme = d.toLocaleTimeString() ;
//    document.getElementById("demo").innerHTML = tme;
// }
//
// stopWatch.method = function () {
//
//
// }
//
// ];