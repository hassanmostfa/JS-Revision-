// /*
// -Fetch API
// */

// fetch("https://fakestoreapi.com/products").then((result) => {
//    console.log(result);
//    let myData = result.json();
//    console.log(myData);
//    return myData ;
// }).then((myData) => {
//    console.log(myData[0].id);
//    console.log(myData[0].title);

//    for (let i = 0; i < myData.length; i++) {
//       document.write(`<div>Product Id is ${myData[i].id} and product title is ${myData[i].title}</div>`)
      
//    }
// }) 
/***********************************************************************************/

// function countBy(x, n) {
//    let z = [];
//    for (i = 0 ; i < n; i++){
//       let increaseAvg = (i*x) + x ; 
//       z.push(increaseAvg)
//    }
//    return z;
// }
// console.log(countBy(2,5));

function makeNegative(num) {
  
  if (num === 0 ){
    return 0 ;
  }else if (num > 0){
    return - num ;
  }else{
    return num ;
  }
}
console.log(makeNegative(0));
console.log(makeNegative(-10));
console.log(makeNegative(8));