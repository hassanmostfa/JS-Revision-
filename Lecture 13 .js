// /*
// - Anonymous Function ====> دالة بدون اسم تخزن في متغير لانها يتم استخدامها مرة واجة فقط 
// - SetTimeout
// */


// let calculator = function (num1 , num2) {
//     return num1 + num2
// }

// console.log(calculator(10 , 20));

// setTimeout(function hassan() {
//     console.log("good");
// }, 2000)

/***********************************************************************************/
// /*
// - Return Nested Functions
// */

// Example 1
// function sayHello(fName , lName) {
//     let message = `Hello` ;
//     //Nested Function
//     function concatMsg() {
//         message = `${message} ${fName} ${lName}`
//     }
//     concatMsg();
//     return message ;
// }
// console.log(sayHello("Hassan" , "Mostafa"));


// Example 2
// function sayHello(fName , lName) {
//     let message = `Hello` ;
//     //Nested Function
//     function concatMsg() {
//         return `${message} ${fName} ${lName}`
//     }
//     concatMsg();
//     return concatMsg() ;
// }
// console.log(sayHello("Hassan" , "Mostafa"));


// Example 3
// function sayHello(fName , lName) {
//     let message = `Hello` ;
//     //Nested Function
//     function concatMsg() {
//         return `${message} ${fName} ${lName}`
//     }
//     concatMsg();
//     return concatMsg() ;
// }
// console.log(sayHello("Hassan" , "Mostafa"));

/***********************************************************************************/
// /*
// - Arrow Functions
// */

// let calc = function(num1) {
//     return num1 ;
// }

// let calc = (num1) =>  num1 ;

// console.log(calc(50));

/***********************************************************************************/
// /*
// - Scope
// */

// var a = 1 , b = 2 ;

// function println() {
//     let a = 44 , b = 55 ;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// println();

/***********************************************************************************/
// Challenge
// Example 1
// let count = 0 ;
// let names = function (...names) {
//     return `${names.join(" | ")} => Done !`
// };
// console.log(names("hassan" , "Ahmed" , "Taher" , "Kareem"));

// let count = 0 ;
// let names = (...names) => `${names.join(" | ")} => Done !`;

// console.log(names("hassan" , "Ahmed" , "Taher"));

// Example 2
// let myNumbers = [20 , 50 , 10 , 60]

// let calc = (one , two , ...nums ) => one + two + nums[0] ;

// // console.log(calc(10 , 10 , 60));

// let calc = function(one , two , ...nums) {
//     return one + two + nums[0] ;
// }
// console.log(calc(10 , 10 , 60));