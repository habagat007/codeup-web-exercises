"use strict";

console.log ("hello from external");

alert("welcome to my page! JS for Movies");
var favcolor = prompt("what is your favorite color?");
alert("great! " + favcolor +  " is my favorite color too!");

var brobearrate = 0;
var amountperday = 3;

var lttlmrmddays = prompt("number of days for Little Mermaid");
var brthrbrdays = prompt("numbber of days for Brother Bear");
var hercdays = prompt("number of days for Hercules");
var totaldaysrent = parseInt(lttlmrmddays) + parseInt(brthrbrdays) + parseInt(hercdays);
var totalpay = totaldaysrent * amountperday;
 alert ("your due amount is " + totalpay.toFixed(2)+ "  for " + totaldaysrent + " total days");


alert("JS for salary for this week");
var facebukrate = 350;
var googlerate = 400;
var amazonrate = 380;
var worknumfrfacbuk = 0;
var worknumframz = 0;
var worknumfrgog = 0;
var totalnumberwrk = 0;
var totalincomeforweek = 0;
var facebuksincome = 0;
var amazincome = 0;
var googleinc = 0;


var worknumfrfacebuk =  prompt("how many hours you work in Facebook?");
var worknumframz    =  prompt("how many hourse you work for Amazon?");
var worknumfrgog    = prompt("how many hours you work in Google?");
var facebuksincome = facebukrate * parseInt(worknumfrfacebuk);
var amazincome = amazonrate * parseInt(worknumframz);
var googleinc = googlerate * parseInt(worknumfrgog);
var totalincomeforweek = facebuksincome + amazincome + googleinc;
var totalnumberwrk = parseInt(worknumfrgog) + parseInt(worknumframz) + parseInt(worknumfrfacebuk);
alert("your total earning for this week is $" + totalincomeforweek.toFixed(2) + " for working " + totalnumberwrk + " hours from multiple company") ;

