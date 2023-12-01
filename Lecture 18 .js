// /*
// - Destruct ====> part one
// */

// let myFriends = ["Ahmed" , "Mohamed" , "Ali" , "Gana"]

// let [a,b,c,d] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// let  [a,b, ,d] = myFriends;

// console.log(a);
// console.log(b);
// console.log(d);
/****************************************************************************/
// /*
// - Destruct ====> part two 
// ---Advanced Example 
// */

// let myFriends = ["Ahmed" , "Mohamed" , ["Mai" , "Omar" , ["Monir" , "Malek"]]]

// let  [ ,  , [a , , [ , b]]] = myFriends

// console.log(a);
// console.log(b);

/****************************************************************************/
// /*
// - Destruct ====> part three 
// ---Swaping 
// */

// let book = "Video" 
// let video = "Book" ;

// [book , video]  = [video , book]

// console.log(book);
// console.log(video);

/****************************************************************************/
// /*
// - Destruct ====> part four 
// ---Object 
// */

// let user = {
//     theName : "Hassan",
//     theAge : 21,
//     theTitle : "Developer",
//     theCountry : "Egypt",
// }
// const {theName : n ,theAge : g , theTitle : t , theCountry : c } = user ;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);
// console.log("=====================================");
// console.log(n);
// console.log(g);
// console.log(t);
// console.log(c);

/****************************************************************************/
// /*
// - Destruct ====>  Function parameters
// */


// const user = {
//     theName : "Hassan",
//     theAge : 21,
//     theTitle : "Developer",
//     theCountry : "Egypt",
//     skills : {
//         Html : 70 ,
//         Css : 80 ,
//     }
// }


// showDetails(user);

// function showDetails(obj) {
//     console.log(`Your Name Is ${obj.theName}`);
//     console.log(`Your Age Is ${obj.theAge}`);
//     console.log(`Your Country Is ${obj.theCountry}`);
//     console.log(`Your Css progress Is ${obj.skills.Css}`);
// }


// function showDetails({theName ,theAge ,theCountry , skills:{Css} } = user) {
//     console.log(`Your Name Is ${theName}`);
//     console.log(`Your Age Is ${theAge}`);
//     console.log(`Your Country Is ${theCountry}`);
//     console.log(`Your Css progress Is ${Css}`);
// }

/****************************************************************************/
// Challenge

// let chosen = 3 ;

// let myFriends = [
//     {title : "Hassan" , age : 21 , available : true , skills : ["Html" , "Css"]},
//     {title : "Ahmed" , age : 20 , available : false , skills : ["Python" , "django"]},
//     {title : "Nagy" , age : 33 , available : true , skills : ["Php" , "Laravel"]},
// ];

// [a, b ,c ] = myFriends

// if (chosen === 1) {
//     console.log(a.title);
//     console.log(a.age);
//     console.log(a.available);
//     console.log(a.skills[1]);
// }else if (chosen === 2){
//     console.log(b.title);
//     console.log(b.age);
//     console.log(b.available);
//     console.log(b.skills[1]);
// }else{
//     console.log(c.title);
//     console.log(c.age);
//     console.log(c.available);
//     console.log(c.skills[1]);
// }



