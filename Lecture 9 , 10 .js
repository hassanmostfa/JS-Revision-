// ِArrays
// let myFriends = ["Attia" , "Nagy" , ["Nossa" , "Gergess"] ] ; ===> كبفية تعريف مصفوفة 

// console.log(`Hello ${myFriends}`);
// console.log(`Hello ${myFriends[1]}`);
// console.log(`${myFriends[0][3]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`Hello ${myFriends[2][1]}`);
// console.log(`${myFriends[2][0][1]}`);

// console.log(myFriends);

// myFriends[2] = "Rowan"  ;

// console.log(myFriends);

// console.log(Array.isArray(myFriends));

/***********************************************************************************/

// Array Methods 
// - Length

// let myFriends = ["Attia" , "Nagy" ,"Nossa"] ;

// console.log(myFriends.length); // ===> عدد العناصر
// console.log(myFriends);
// myFriends[myFriends.length] = "Hassan" 
// console.log(myFriends);
// myFriends[myFriends.length-1] = "Hassan" // ===>  بيبدل اخر عنصر
// console.log(myFriends);

/***********************************************************************************/
// 
// let myFriends = ["Attia" , "Nagy" ,"Nossa"] ;

// /*
// - unshift add elements to the first of array
// */
// console.log(myFriends); 
// console.log(myFriends.unshift("Madlin" , "Rowan")); 
// console.log(myFriends); 

// /*
// - push add elements to the last of array
// */
// console.log(myFriends); 
// console.log(myFriends.push("Sayed" , "Fakhr")); 
// console.log(myFriends); 


// /*
// - shift remove elements to the first of array
// */
// console.log(myFriends); 
// let first = myFriends.shift(); 
// console.log(myFriends); 
// console.log(`the first word removed is ${first}`);
// /*

// - pop remove elements to the last of array
// */
// console.log(myFriends); 
// let last = myFriends.pop(); 
// console.log(myFriends); 
// console.log(`the first word removed is ${last}`);

/***********************************************************************************/

// let myFriends = ["Attia" , "Nagy" ,"Nossa" , "Gergess"] ;

// // /*
// // - indexOf ("اللي انت بتدور عليه" ) ===>  البحث داخل مصفوفة من الاول
// // */
// console.log(myFriends); 
// console.log(myFriends.indexOf("Nossa")); 

// // /*
// // - lastIndexOf ("اللي انت بتدور عليه" ) ===> البحث داخل مصفوفة من الاخر
// // */
// console.log(myFriends); 
// console.log(myFriends.lastIndexOf("Nagy")); 

// // /*
// // - includes ("اللي انت بتدور عليه") ===>البحث داخل مصفوفة هل يوجد هذا العنصر ام لا
// // */
// console.log(myFriends); 
// console.log(myFriends.includes("Nagy")); 
// console.log(myFriends.includes("Kamel")); 

/***********************************************************************************/

// let myFriends = [1 , "500" , -10 , "Attia" , "Nagy" ,"Nossa" , 1000 ,"Gergess"] ;

// // /*
// // - sort()  ===>  بترتب المصفوفة
// // - reverse()  ===>  بترتب المصفوفة بالعكس
// // */
// console.log(myFriends); 
// console.log(myFriends.sort()); 
// console.log(myFriends.reverse()); 

/***********************************************************************************/
// // let myFriends = ["Attia" , "Nagy" ,"Nossa" , "Gergess"] ;

// // /*
// // - slice(start(number) , End (number))  ===>  بتحدد مجموعة من العناصر طبقا لل index
// // - splice()  ===>  بتاخد المتحدد وتمسح الباقي ومممن تضيف عناصر جديدة مكان اللي انت مسحتة 
// // */
// // console.log(myFriends); 
// // console.log(myFriends.slice(2 , 3)); 
// // myFriends.splice(1 , 3 , "Kaka"); 
// // console.log(myFriends); 

/***********************************************************************************/

// let myFriends = ["Attia" , "Nagy" ,"Nossa" , "Gergess"] ;
// let myNewFriends = ["Rowan" , "Madlin"] ;
// let mySchoolFriends = ["Samir" , "Hoho"] ;

// // /*
// // - concat(new array)===> بتربط بين اكتر من مصفوفة في مصفوفة واحدة
// // - join(seperator)  ===>  تحويل العناصر الي نصوص والفصل بينهم بفاصل
// // */


// let allFriends = myFriends.concat(myNewFriends , mySchoolFriends) ;
// console.log(allFriends);
// console.log(allFriends.join(" | "));

/***********************************************************************************/

// Challenge

// let zero = 0 ;
// let counter = 3 ;
// let myFriends = ["Ahmed" , "Mazero" ,"Elham" , "Osama" , "Gamal" , "Ameer"] ;

// Task 1

// myFriends.pop()
// myFriends.pop()

// console.log(myFriends);
// console.log(myFriends.reverse());



// Task 2

// myFriends.pop()
// myFriends.pop()

// let task_2 = myFriends.slice(zero , myFriends.length)
// console.log(task_2);
// let step_3 = task_2.reverse() ;
// console.log(step_3);


// Task 3

// myFriends.push("Elzero")
// console.log(myFriends);

// myFriends.splice( zero , counter );
// console.log(myFriends);

// myFriends.splice( zero , counter );
// console.log(myFriends.join());



// Task 4

// let remove = myFriends.shift()
// console.log(myFriends);

// console.log(myFriends[zero][4] + myFriends[zero][5].toUpperCase());
