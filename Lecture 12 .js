// /*
// - Functions 
// */

// function sayHello(userName) {
//     console.log(`Welcome ${userName}`);
// }

// sayHello("Hassan");

/***********************************************************************************/
// /*
// - Advanced Examples on Functions 
// */

// function sayHello(userName , age) {
//     if (age < 20){
//         console.log(`This App Not Suitable For You`);
//     }else{
//             console.log(`Welcome ${userName} Your Age is ${age}`);
//     }
// }

// sayHello("Hassan" , 21);


// function generateYears(start , end , exclude) {
//     for (let i = start ; i <= end ; i++) {
//         if (i === exclude) {
//             continue;
//         }
//         console.log(i);
//     }

// }
// generateYears(1990 , 2023 , 2020)

/***********************************************************************************/
// /*
// - Return 
// */

// function calc(n1 , n2) {
//     return n1 + n2 ;
// }

// let result = calc(10 , 50);

// console.log(result);

/***********************************************************************************/
// /*
// - Default Function Parameters  
// - Es6 Method
// */

// function sayHello(userName = "unknown" , age = "unknown" ) {
//     console.log(`Hello ${userName} And your Age is ${age}`);
// }

// sayHello();

/***********************************************************************************/
// /*
// - Rest Function ====> تستخدم عندما يوجد عدد كبير من ال parameters
// */

// function calc(...numbers) {
//     let result = 0 ;
//     for (let i = 0; i < numbers.length; i++) {
//         result+= numbers[i] ;
//     }
//     return `The Final Result is ${result}`
// }

// console.log(calc(10 , 20 , 55 , 15));

/***********************************************************************************/
//Challenge 
// function showDetails(a , b , c) {

//     if (typeof a === "string" && typeof b === "number" && typeof c === "boolean"){
//         if (c === true) {
//             return `Hello ${a} , Your Age is ${b},You are available For Hire`
//         }else{
//             return `Hello ${a} , Your Age is ${b},You are Not available For Hire`
//         }
//     }else if (typeof a === "number" && typeof b === "string" && typeof c === "boolean"){
//         if (c === true) {
//             return `Hello ${b} , Your Age is ${a},You are available For Hire`
//         }else{
//             return `Hello ${b} , Your Age is ${a},You are Not available For Hire`
//         }
//     }else if(typeof a === "boolean" && typeof b === "string" && typeof c === "number"){
//         if (a === true) {
//             return `Hello ${b} , Your Age is ${c},You are available For Hire`
//         }else{
//             return `Hello ${b} , Your Age is ${c},You are Not available For Hire`
//         }
//     }else if(typeof a === "boolean" && typeof b === "number" && typeof c === "string"){
//         if (a === true) {
//             return `Hello ${c} , Your Age is ${b},You are available For Hire`
//         }else{
//             return `Hello ${c} , Your Age is ${b},You are Not available For Hire`
//         }
//     }else {
//         if (b === true) {
//             return `Hello ${a} , Your Age is ${c},You are available For Hire`
//         }else{
//             return `Hello ${a} , Your Age is ${c},You are Not available For Hire`
//         }
//     }


// }

// console.log(showDetails("hassan" , 21 , true ));
// console.log(showDetails(21 , "hassan" , true ));
// console.log(showDetails(true , 21 , "hassan" ));
// console.log(showDetails(false , "hassan" , 21 ));
