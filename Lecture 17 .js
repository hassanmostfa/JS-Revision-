// /*
// - BOM =====> Browser Object Model 
// ---alert ===> Need no response ok only
// ---confirm ===> Need  response and return a boolean
// ---prompt (massage , Default message) ===> Collect Data
// */

// alert("Fire!!!!!!")
// confirm("Are You Okay?")
// prompt ("Choose The Best Day For Yoy" , "Write day with 3 character")


/****************************************************************************/
// /*
// - BOM =====> Browser Object Model 
// ---SetTimeOut 
// ---clearTimeOut 
// */


// setTimeout(function (user , age) {
//     console.log(`My Name Is ${user} And My Age Is ${age}`);
// },3000 , "Hassan" , 21)

// function userInfo (user , age) {
//     console.log(`My Name Is ${user} And My Age Is ${age}`)
// }

// let counter = setTimeout(userInfo , 3000 , "Hassan" , 21)

// let btn = document.querySelector("button")
// btn.onclick = function () {
//     clearTimeout(counter)
// }

/****************************************************************************/
// /*
// - BOM =====> Browser Object Model 
// ---SetInterval(function , milleconds , Additional Params) 
// ---clearInterval(Identfier)
// */

// let count = setInterval(countDown , 1000)
// let div = document.querySelector(".count-down")

// function countDown() {
//     div.innerHTML -= 1
//     if (div.innerHTML === "0") {
//     clearInterval(count)
//     }
// }

/****************************************************************************/
// /*
// - BOM =====> Browser Object Model 
// ---Window Object
// */

// console.log(location);
// console.log(location.href);

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);
// console.log(location.hash);

/****************************************************************************/
// /*
// - BOM =====> Browser Object Model 
// ---Window.open()
// ---Window.history
// */

// setTimeout(function () {
//     window.open("https://google.com" , "_blank" 
//     , "width=400 , height=400,left=50,top=200")
// } , 2000)


// console.log(history);
/****************************************************************************/
// /*
// - BOM =====> Browser Object Model 
// ---Scrolling main Practice
// */

// let btn = document.querySelector("button")

// window.onscroll = function () {
//     if (window.scrollY >= 600){
//         btn.style.display = "block"
//     }else{
//         btn.style.display = "none"

//     }
// }

// btn.onclick = function() {
//     window.scrollTo({
//         left : 0 ,
//         top : 0 , 
//         behavior : "smooth",
//     });
// }

/****************************************************************************/
// /*
// - BOM =====> Browser Object Model 
// ---Local Storage
// */

// //Set 
// localStorage.setItem("color" , "red")
// localStorage.fontWeight = "bold"
// localStorage["fontSize"] = "20px" ;


// //Get 
// console.log(localStorage.getItem("color"));
// console.log(localStorage.fontWeight);
// console.log(localStorage["fontSize"]);


// //Remove one 
// localStorage.removeItem(color)

// //Remove all 
// localStorage.clear()

//Set Color in page 
// document.body.style.background = localStorage.getItem("color") ;


// Practice

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (localStorage.getItem("color")) {
//     //[1] Add Color to div
//     exp.style.backgroundColor = localStorage.getItem("color") ;
//     //[2] Remove Active class from all li
//     lis.forEach((li) => {
//         li.classList.remove("active")
//     });
//     //[2] Add Active class to currnt color
//     document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active")
// }



// lis.forEach((li) => {
//     li.addEventListener("click" , (e) => {
//         // console.log(e.currentTarget.dataset.color);
//         //Remove Active class from all lis
//         lis.forEach((li) => {
//             li.classList.remove("active")
//         });
//         // Add active class to current element
//         e.currentTarget.classList.add("active")
//         //Add current color to local storage
//         localStorage.setItem("color" , e.currentTarget.dataset.color)
//         //Change Div background color
//         exp.style.backgroundColor = e.currentTarget.dataset.color ;
//     });
// });
// localStorage.clear();
/****************************************************************************/
//Challenge 

// let input = document.querySelector(".input")
// let addBtn = document.querySelector(".add")
// let tasks = document.querySelector(".tasks")

// //Empty Array to store tasks
// let tasksArray = [];

// //check if there is tasks in local storage
// if(localStorage.getItem("tasks")){
//     tasksArray = JSON.parse(localStorage.getItem("tasks"))
// }

// //Trigger get data from local storage
// getDataFromLocalStorage();

// //Add Task
// addBtn.onclick = function () {
//     if (input.value !== "") {
//         addTaskToArray(input.value); // Add Task
//         input.value = "" ;
//     }
// }

// //Click on task element
// tasks.addEventListener("click" , (e) => {
//     if(e.target.classList.contains("del")){
//         //Remove Task from local storage
//         deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
//         //Remove Element from page
//         e.target.parentElement.remove();
//     }
// })

// let counter = 1 ;
// function addTaskToArray(taskText) {
//     const task = {
//         id : counter++ ,
//         title : taskText ,
//         completed : false ,
//     }
//     //Add task to array
//     tasksArray.push(task)
//     //Add tasks to page
//     addElementsToPageFrom(tasksArray) ;
//     //Add tasks to local storage
//     addDataToLocalStorageFrom(tasksArray);
// }

// function addElementsToPageFrom(tasksArray) {
//     //Empty Tasks Div
//     tasks.innerHTML = "";
//     //Looping on array of tasks
//     tasksArray.forEach(task => {
//         //Create Main Div
//         let div = document.createElement("div")
//         div.className = "task"
//         //Check if task is done
//         if (task.completed) {
//             div.className = "task done"
//         }
//         div.setAttribute("data-id" , task.id)
//         div.appendChild(document.createTextNode(task.title))
//         // Create Delete Button
//         let deleteBtn = document.createElement("button")
//         deleteBtn.className = "del"
//         deleteBtn.innerHTML = "Delete"
//         //Append Button to main Div
//         div.appendChild(deleteBtn)
//         //Add div to tasks container
//         tasks.appendChild(div);
//     });

// }

// function addDataToLocalStorageFrom (tasksArray){
//     localStorage.setItem("tasks" , JSON.stringify(tasksArray))
// }


// function getDataFromLocalStorage (){
//     let data = localStorage.getItem("tasks")
//     if (data) {
//         let tasks = JSON.parse(data)
//         addElementsToPageFrom(tasks)
//     }
// }


// function deleteTaskWith (taskId) {
//     tasksArray = tasksArray.filter((task) => task.id != taskId)
//     addDataToLocalStorageFrom(tasksArray);
// }