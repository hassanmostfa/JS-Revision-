// // 1) Data Types

// console.log("Hassan Mostafa");
// console.log(typeof "Hassan Mostafa"); //====> Srting
// console.log(typeof 777777); //====> Number
// console.log(typeof 777777.666); //====> Number
// console.log(typeof [10,20,30,40]); //====> Object
// console.log(typeof ["10","20","30","40"]); //====> Object
// console.log(typeof {name:"Hassan" , age:20}); //====> Object
// console.log(typeof true); //====> Boolean
// console.log(typeof false); //====> Boolean
// console.log(typeof undefined); //====> Undefined
// console.log(typeof null); //====> Object

// /*************************************************************************************************/

// // 2) Variables  //======> حاوية تستخدم لتخزين البيانات بداخلها واستخدامها مرة اخري في اي وقت واي مكان 
// var user = "Mostafa" ; 
// console.log(user);
// console.log(user);
// console.log(user);
// console.log(user);
// /*************************************************************************************************/

// // 3) Identifiers & Writing Style

// var us er = "Mostafa" ; //=====> المسافات بين المتغير غير مسموح بها
// var 1user = "Mostafa" ; //=====> الارقام في اول المتغير غير مسموح بها
// var @user = "Mostafa" ; //=====> العلامات في اول المتغير غير مسموح بها
// var userName = "Hassan"; //===> camelCase Style

// /*************************************************************************************************/
// // 4) var & let & const Compare (Interview Question)
/*
    -var : 
        1) يمكن اعادة تعريفة)(Redeclare)
        2)  لا يمكن استخدامه قبل تعريفة ويعطي undesfined
        3)  يضاف الي ال ويمكن استخدامه window 
    -let : 
        1) لا يمكن اعادة تعريفة  )(Redeclare)
        2)  لا يمكن استخدامه قبل تعريفة ويعطي error
        3) لا يضاف الي ال window ولا يمكن استخدامه 
    -const : 
        1) لا يمكن اعادة تعريفة  )(Redeclare)
        2)  لا يمكن استخدامه قبل تعريفة ويعطي error
        3) 

*/

// /*************************************************************************************************/

// // 5) Concatination
// + ====> تستخدم للربط بين اكثر من متغير
// var fName = "Hassan";
// var jobTitle = "Engineer";
// document.write(fName + " " + "is" + " " + jobTitle)

// /*************************************************************************************************/

// // 6) 

// /*************************************************************************************************/

// let x = 20
// console.log(`${20}`);

// let card = `
// <div class="card"> Hello World </div>
// <div class="cardNo"> ${x} </div>

// `
// document.write(`${card}`)

// /*************************************************************************************************

// Variable and concatination Challenge : 
// let cardTitle = "Elzero" ,
//     cardDescription = "Elzero web school" ,
//     cardDate = "25/10" ;

// let cardItems = 
// `
// <div class"card">
//     <h3>${cardTitle}</h3>
//     <p>${cardDescription}</p>
//     <span>${cardDate}</span>
// </div>

// `
// document.write(cardItems) ;
// document.write(cardItems) ;
// document.write(cardItems) ;
// document.write(cardItems) ;

// /*************************************************************************************************

// //Assignment 1 
// let numberOne = "10" , numberTwo="20" ;

// console.log(numberOne + numberTwo);
// console.log(typeof (numberOne , numberTwo));
// console.log(`${numberOne}${numberTwo}`);
// console.log(typeof(`${numberOne}${numberTwo}`));
// console.log(numberTwo + "\n" + numberOne);
// console.log(`${numberTwo}
// ${numberOne}`);

// /*************************************************************************************************

// //Assignment 2
// console.log(elzero.innerHTML); 
// console.log(typeof elzero); 

// /*************************************************************************************************

// //Assignment 4
// let a = 21;
// let b = 20;

// console.log("_" + a + "_" +a + b + "_" +a + b + "_" + a + b + "_"+ b + "_" ); // _21_2021_2021_2021_20_

// /*************************************************************************************************
