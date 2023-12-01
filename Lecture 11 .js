// /*
// - For loop ====> تستخدم للتكرار
// */

// for (let i = 1; i <= 10 ; i++) {
//     console.log(i);
// }
// console.log("Fire");


// /*
// - looping In sequence ====> تستخدم للتكرار في المصفوفات
// */

// let myFriends = [1 , 2 ,"Attia" , "Nagy" ,3,"Nossa","Gergess"] ;
// let onlyNames = [] ;

// for(let i = 0 ; i < myFriends.length ; i++)
// {
//     console.log(myFriends[i]);
// }


// for(i=0 ; i<myFriends.length ; i++)
// {
//     if (typeof myFriends[i] === "string") {
//         onlyNames.push(myFriends[i]) ;
//     }
// }
// console.log(onlyNames);
/***********************************************************************************/

// /*
// - Nested loops ====> تستخدم في حالة وجود اكثر من تكرار
// */

// let products = ["keyboard" , "Mouse" , "Monitor" , "Camera"]

// let colors = ["black" , "red" , "white"]

// let model = [2021 , 2022]

// for (let i = 0; i < products.length; i++) {
//     console.log("*".repeat(15));
//     console.log(`# ${products[i]}`);
//     console.log("*".repeat(15));
//     console.log("Colors : ");
//     for (let j = 0; j < colors.length; j++) {
//         console.log(`- ${colors[j]}`);;
        
//     }
//     console.log("Models : ");
//     for (let k = 0; k < model.length; k++) {
//         console.log(`- ${model[k]}`);;
        
//     }
// }
/***********************************************************************************/
// /*
// - loop control : 
// # break ====> تستخدم لايقاف ال loop
// # continue ====> تستخدم لتخطي شرط معين  
// */

// let products = ["keyboard" , "Mouse" , "Monitor" , "Camera"]

// for(let i = 0 ; i < products.length ; i++)
// {
//     if (products[i] === "Monitor") {
//         continue;  // or break
//     }
//     console.log(products[i]);
// }

/***********************************************************************************/

// Example 

// let products = ["keyboard" , "Mouse" , "Monitor" , "Camera" , "Pen" , "Iphone"]
// let colors = ["black" , "red" , "white"]
// let showCount = 2 ;

// document.write(`<h1>Show ${showCount} Products : </h1>`)

// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`)
//     document.write(` <h3> [${i+1}] ${products[i]} </h3>`)
//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p>${colors[j]}</p>`)
        
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`)
//     document.write(`</div>`)
// }
/***********************************************************************************/

// /*
// - while loop ====> طريقة اخري للتكرار
// - do / while loop ====> طريقة اخري للتكرار
// */

// let products = ["keyboard" ,"Mouse" ,"Monitor" ,"Camera" ,"Pen"]

// let i = 0 ;
// while (i<products.length) {
//     console.log(products[i]);
//     i++
// }


// let i = 0 ;
// do {
//     console.log(i);
//     i+=2
// } while (false);

// console.log(i);

/***********************************************************************************/

// Challenge

// let myAdmins = ["Ahmed" ,"Osama", "Sayed" , "Stop" , "Samera"] 
// let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"]

// let showCount = 3 ;
// let counter  = 1
// let counter2 = 1
// let counter3 = 1

// document.write(`<div>We Have X Admins </div>`)
// document.write(`<div>We Have ${showCount} Admins </div> <hr>`)

// for (let i = 0 ; i < showCount ; i++) {
//     document.write(`<div>`)
//         document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]}`)
//         document.write("<h3>Team Members : </h3>")
//         for (let j = 0; j < myEmployees.length; j++) {
//             if (myEmployees[j].includes("A") && myAdmins[i].includes("Ahmed")) {
//                     document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
//             }else if (myEmployees[j].includes("O") && myAdmins[i].includes("Osama")) {
//                 document.write(`<p>- ${counter2++} ${myEmployees[j]}</p>`)
//             }else if (myEmployees[j].includes("S") && myAdmins[i].includes("Sayed")){
//                 document.write(`<p>- ${counter3++} ${myEmployees[j]}</p>`)
//             }
//         }
//     document.write(`</div> <hr>`)

// }



