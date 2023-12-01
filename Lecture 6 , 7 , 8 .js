/* 
Comparison Operators

==       ======> value only
!=       ======> value only

===      ======> value + type
!==      ======> value + type

>        ======> greater than  || >=      ======> greater than or equal
<        ======> less than     || <=      ======> less than or equal

*/

/***********************************************************************************/

/* 
Logical Operators

!      ======> Not
&&     ======> And
||     ======> Or

*/

/***********************************************************************************/
/*
Control flow

- if 
- else if 
- else
- Nested if

*/

// let price = 100 
// let discount = true 
// let discountAmount = 30 
// let country = "Egypt"
// let student = false

// if (discount === true) {
//     price -= discountAmount
//     console.log(price);
// }else if (country === "Egypt") {
//     if (student === true) {
//         price -= discountAmount + 30 
//         console.log(price);
//     }
//     else {
//         price -= discountAmount + 10
//         console.log(price);
//     }
// }else {
//     price -= 10
//     console.log(price);
// }

// هناك طريقة مختصرة تساوي ال if condition

// discount === true ? price -= discountAmount : console.log("اخلع الا");
// console.log(price);

/***********************************************************************************/
//challenge 

// Use Ternary if
// let a = 10

// a < 10 ? 
// console.log("10")
// : a >= 10 && a <= 40 ?
// console.log("10 To 40") 
// : a > 40 ? console.log("> 40") 
// :console.log("Unknown");


//Task 2 
// let st = "ElZero Web School"
// let newSt = st.slice(0,6).repeat(2)
// console.log(newSt);

// if (newSt === "ElZeroElZero") {

//     console.log("Good");
// }
// /***********************************************************************************/

// Switch Case 

// let day = 5 ;

// switch (day) {
//     case 1:
//         console.log("Saturday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Sunday");
//         break;
//     case 4:
//         console.log("Tuseday");
//         break;
//     case 5:
//         console.log("Wednesday");
//         break;
//     case 6:
//         console.log("Thuresda");
//         break;
//     case 7:
//         console.log("Friday");
//         break;
//     default:
//         break;
// } 
/***********************************************************************************/

//Challenge 

// 1) convert to Switch Condition 

// let job = "Manager"
// let salary = 0


// switch (job) {
//     case "Manager":
//         salary = 8000
//         break;
//     case "IT" || "Support":
//         salary = 6000
//         break;
//     case "Developer" || "Designer":
//         salary = 7000
//         break;
//     default:
//         salary = 4000
//         break;
// }
// document.write(`The Salary of ${job} is ${salary}`)


// 2) convert to if Condition 
// let holidays = 3
// let Money = 0

// if (holidays === 0) {
//     Money = 5000 
//     console.log(`My Money is ${Money}`);
// }else if (holidays === 1 || holidays === 2) {
//     Money = 3000 
//     console.log(`My Money is ${Money}`);
// }
// else if (holidays === 3) {
//     Money = 2000 
//     console.log(`My Money is ${Money}`);
// }
// else if (holidays === 4) {
//     Money = 1000 
//     console.log(`My Money is ${Money}`);
// }
// else {
//     Money = 0 
//     console.log(`My Money is ${Money}`);
// }
/***********************************************************************************/