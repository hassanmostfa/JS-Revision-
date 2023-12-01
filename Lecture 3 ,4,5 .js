// //power 
// console.log(2 ** 4);
// // Modulas (باقي القسمة)
// console.log(8 % 4);


//*****************************************************************************/
// Task 1 

// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

//*****************************************************************************/
//Number Methods

// console.log((100).toString()); ===> التحويل الي نص
// console.log(100..toString()); 
// console.log(100..toString());
// console.log(100.55555555.toFixed(2)); ===> التقريب لاقرب رقم عشري مكون من رقمين 
// console.log(100.55555555.toFixed(2));
// console.log(parseInt("100.500 Hassan")); ===> التحويل رقم صحيح
// console.log(parseInt("100.500 Hassan"));
// console.log(parseFloat("100.500 Hassan"));  ===> التحويل لاقرب رقم عشري 
// console.log(parseFloat("100.500 Hassan"));
// console.log(Number.isInteger("100")); ===> يتاكد اذا كان هذا الرقم صحيح او لا
// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100));
// console.log(Number.isInteger(100));

//*****************************************************************************/
//*****************************************************************************/
//Math objects
// console.log(Math.round(99.2));  ===> التقريب لاقرب رقم عشري لاسفل
// console.log(Math.round(99.6)); ===> التقريب لاقرب رقم عشري لاعلي

// console.log(Math.ceil(99.2));  ===> التقريب لاقرب رقم عشري لاعلي دائما
// console.log(Math.floor(99.9));  ===> التقريب لاقرب رقم عشري لاسفل دائما

// console.log(Math.min(10,20,30,40,50));  ===> ايجاد اقل قيمة
// console.log(Math.max(10,20,30,40,50));  ===> ايجاد اكبر قيمة

// console.log(Math.pow(2,4));  ===> الاس

// console.log(Math.round(Math.random()*10));
// console.log(Math.trunc(66.652));


//*****************************************************************************/
// //challenge
// let a = 1_00 
// let b = 2_00.5 
// let c = 1e2
// let d = 2.4

// // The Smallest Number 
// console.log(Math.round(Math.min(a , b , c , d)));

// // Use a + d to get 10000
// console.log(Math.round((Math.pow(a,d) / 6.3) - 15));

// //from variable d get 2 by 4 methods
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Math.ceil(Math.floor(d)));

// //from variable b + d get 66.67 ===> string
// console.log((b / (Math.ceil(d) )- 0.16).toFixed(2));

// //from variable b + d get 67 ===> Number
// console.log(Math.round(b / Math.ceil(d)));

//*****************************************************************************/

// // String Methods Part 1
// let theName = " Hassan "
// console.log(theName);
// console.log(theName[1]);  ===> ايجاد ال index
// console.log(theName[5]);

// console.log(theName.charAt(3));  ===> ايجاد ال index

// console.log(theName.length);  ===> ايجاد طول الكلمة 

// console.log(theName.trim());  ===> بيشيل المسافات الزياة

// console.log(theName.trim());

// console.log(theName.toUpperCase());  ===> تحويل الكلمة لحروف كابيتال
// console.log(theName.toLowerCase()); ===> تحويل الكلمة لحروف سمول

// console.log(theName.trim().charAt(2).toUpperCase());

//*****************************************************************************/

// // String Methods Part 2

// let a = "Hassan Mostafa El_Shiat"

// console.log(a.indexOf("Mostafa")); //====>  بتدور علي مكان كلمة داخل جملة 
// console.log(a.lastIndexOf("Mostafa")); //====>  بتدور علي مكان كلمة داخل جملة من الاخر للاول
// console.log(a.slice(7,15)); //===>  بتقسم الكلمة لشريحة لها بداية ونهاية
// console.log(a.split(" " , 2)); //===> بتقسم الجملة لمصفوفة من الكلمات او الحروف 
// console.log(a.repeat(5)); //===> بيكرر المتغير اللي وبتديلة عدد مرات التكرار

//*****************************************************************************/
// // Challenge

// let a = "ElZero Web School"

// // Use slice + charAt to get 0 from variable a 
// console.log(a.slice(2 ,6));
// console.log(a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5));

// // we want 8H
// console.log(a.charAt(13).toUpperCase().repeat(8));

// // Return array with [ElZero] 
// console.log(a.split(" " , 1));

//*****************************************************************************/
