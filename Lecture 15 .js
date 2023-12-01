// /*
// - Object
// */

// let myVar = "country of" ;

// let user = {
//     // properites 
//     theName : "Hassan",
//     age : 21 ,
//     "country of" : "Egypt",
//     // Methods
//     sayHello :  () => `Good Morning` ,
//     skills : ["HTML" , "CSS" , "JS"] , 
//     available : false ,
//     adressess : {
//         ksa : "Riyadh" , 
//         Egypt  : {
//             one : "Cairo",
//             two : "Giza"
//         }
//     },
//     checkAv : function () {
//         if(user.available === true) {
//             return `Free For Work`
//         }else{
//             return `Sorry! Not Free`
//         }
//     }
//     };

// console.log(user.theName);
// console.log(user["theName"]);
// console.log(user.age);
// console.log(user["country of"]);
// console.log(user.sayHello());
// console.log("==============================");
// console.log(user[myVar]);
// console.log("==============================");
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]);
// console.log(user.adressess.ksa);
// console.log(user.adressess.Egypt);
// console.log(user.adressess.Egypt.one);
// console.log(user["adressess"]["Egypt"]["two"]);
// console.log(user.checkAv());
// console.log("==============================");
// let user = {}  === let user = new object() ;

/****************************************************************************/
// /*
// - This
// */

// let user = {
//     age : 21 ,
//     ageInDays : function () {
//         console.log(this);
//         return this.age * 365
//     }
// }
// console.log(user.ageInDays());

/****************************************************************************/
// /*
// - Create Object with create Method
// */

// let user = {
//     age : 21 ,
//     doubleAge : function () {
//         return this.age * 2
//     }
// };

// console.log(user.doubleAge());

// let copyObj = Object.create(user)
// copyObj.age = 50 ;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());