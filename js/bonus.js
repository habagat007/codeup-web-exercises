// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2

// var reportContents = "Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67
// ";



"use strict";
var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";
var arrayReportContents = reportContents.split('\n');
var arrayEmployeeInfo = [];
 arrayEmployeeInfo = arrayReportContents.slice(7);
 var strEmployeeInfo = arrayEmployeeInfo.join('|');
 arrayEmployeeInfo = strEmployeeInfo.split(',');

// var arrayCompanyHead = arrayReportContents.slice(0,3);
// var strCompanyHead = arrayCompanyHead.join('<br>');
// var arrayCompanyAscii = arrayReportContents.slice(3,4);
// var strCompanyAscii = arrayCompanyAscii.join('<br>');
// var arrayEmployeeInfo = arrayReportContents.slice(4,5);
// var strEmployeeInfo = arrayEmployeeInfo.join('<br>');
// var arrayCompanyAscii2 = arrayReportContents.slice(5,6);
//
//
// document.body.innerHTML = strCompanyHead;
//document.body.innerHTML += strCompanyAscii;
//document.body.innerHTML += strEmployeeInfo;

// var Monthly = [];
// var strComapnyHead = "";
// var emploInfo = "";
// var CompanyHead = [];
// var SalesRepo = [];
// var CompanyRepo  =[];
// var strSalesRepo = "";

// console.log(reportContents);
// var CompanyRepo = reportContents.split(',');
// console.log(CompanyRepo);
// SalesRepo = CompanyRepo.slice(0,5); // heads array
// CompanyHead = SalesRepo.slice(0,1); // company Monthly sale - EmploNum
// strComapnyHead = CompanyHead.join('|');
// Monthly = strComapnyHead.split(',');





//
// EmployeeInfo = companyInfo.slice();
// document.body.innerHTML = companyInfo;
// console.log(EmployeeInfo);
//var stringStud = companyInfo.join('<br>');

//var employeeName= [];



// var EmployeeInfo = [];
// EmployeeInfo.push('Employee Number','First Name','Last Name','Sales Units'+ '<br>');
// console.log(EmployeeInfo);
//
// var StrEmployeeInfo = EmployeeInfo.join('  :   ');
//
// var EmployeeNum = [];
// EmployeeNum.push('1','2','3','4','5','6','7','8','9','10','11',12);
//
// var StrEmployeeNum = EmployeeNum.join('<br>');
// document.body.innerHTML = StrEmployeeInfo;
// document.body.innerHTML += StrEmployeeNum;