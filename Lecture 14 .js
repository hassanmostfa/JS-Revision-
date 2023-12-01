// /*
// - Map function =====> دالة بتلف علي جميع عناصر المصفوفة وتطلع مصفوفة جديدة 
// */

// let numbers = [1 , 2 , 3 , 4 , 5 , 6]

// let newArr = [];
// for(let i = 0 ; i < numbers.length ; i++ ){
//     newArr.push(numbers[i] + numbers[i]) ;
// }
// console.log(newArr);

//Map function
// let addSelf = numbers.map(element => element + element)
// console.log(addSelf);


//Example 1 
// Note that : condition ? true : false ;

// let swapingCases = "HaSsAn" ;
// console.log(swapingCases);
// let sw = swapingCases.split("")
//     .map((ele) => ele === ele.toUpperCase()?
//     ele.toLowerCase() :
//     ele.toUpperCase() )
//     .join("")

// console.log(sw);

//Example 2
// let invertedNumbers = [10 , -20 , -30 , 50 , 100 , -30]

// let inv = invertedNumbers.map((ele) => -ele);
// console.log(inv);

//Example 3
// let ignoreNumbers = "has123sa4n" ;

// let ign = ignoreNumbers.split("").map((e) => isNaN(parseInt(e))?e:"").join("")
// console.log(ign);

/***********************************************************************************/
// /*
// - Filter function =====> دالة تستخدم لعمل فلتر للمصفوفة ونعطي مصفوفة جديدة بالعناصر التي اجتازت الشؤط 
// */

//Example 1

// let friends = ["Ahmed" , "Hassan" , "Ameer" , "Nagy" , "Asmaa"]
// let filteredFriends = friends.filter((ele) => ele.startsWith("A"))
// console.log(filteredFriends);

//Example 2

// let numbers = [11 , 20 , 22 , 33 , 4 , 99 , 100]
// let evenNumbers = numbers.filter((ele) => ele % 2 === 0) ;
// console.log(evenNumbers);

//Example 2

// let sentences = "I Love Foood Code Too Playing Much" ;

// let smallWords = sentences.split(" ").filter((ele) => ele.length <= 4)
// console.log(smallWords);

//Example 3

// let mix = "A13BS2ZX" ;
// let numbersOnly = mix.split("")
// .filter((ele) => !isNaN(parseInt(ele)))
// .map( (e) => e * e)
// console.log(numbersOnly);

/***********************************************************************************/
// /*
// - Reduce function =====> دالة تستخدم لتخفيض المصفوفة وعمل عملية علي عناصرها ولا تعود بمصفوفه اخري 
// */

//Example 1

// let nums = [10 , 20 , 30 , 40 , 50]
// let sum = nums.reduce(function (acc  , current) {
//     return acc + current
// })
// console.log(sum);


//Example 2

// let theBiggest = ["Bla" , "Propaganda" , "Food" , "Propaganda_Two" ,  "AAA"]
// let check = theBiggest.reduce(function (acc , current) {
//     return acc.length > current.length ? acc : current ;
// })
// console.log(check);

/***********************************************************************************/
// /*
// - forEach function =====> دالة تستخدم للوصول الي حميع عناصر الصفحة المحددة
// */
// let allLis = document.querySelectorAll("ul li")
// let allDivs = document.querySelectorAll(".content")

// allLis.forEach(function (ele) {
//     ele.onclick = function () {
//         //Remove Active class from all elements
//         allLis.forEach(function (ele) {
//             ele.classList.remove("active") 
//         });
//         //Add Active class to this element
//             this.classList.add("active")
//         //Hide All Divs
//         allDivs.forEach(function (ele) {
//             ele.style.display = "none"
//         })
//     }
// });

/***********************************************************************************/

// Challenge

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split(",").filter(function (ele) {
//     return isNaN(parseInt(ele))})
//     .map(ele => ele == "_" ? ele = " " : ele)
//     .map(ele => ele.length > 1 ? ele[length] : ele )
//     .filter(ele => ele !== "Z")
//     .join("")
// console.log(solution);