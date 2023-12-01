// /*
// - DOM =====> Document Object Model
// */

// let myIdElement = document.getElementById("my-div")
// let myTagElements = document.getElementsByTagName("p")
// let myClassElements = document.getElementsByClassName("my-span")
// let myQueryElement = document.querySelector(".my-span")
// let myQueryAllElement = document.querySelectorAll(".my-span")

// console.log(myIdElement);
// console.log(myTagElements[0]);
// console.log(myTagElements[0]);
// console.log(myClassElements);
// console.log(myQueryElement);
// console.log(myQueryAllElement[0]);


// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);

//==========================================================================//

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML="Text From <span>main.js</span> File"
// myElement.textContent="Text From <span> File"

// document.images[0].src = "https://google.com"
// document.images[0].alt = "Alternative"
// document.images[0].title = "Picture"
// document.images[0].id = "pic"
// document.images[0].className = "pic"

// let myLink = document.querySelector(".my-link")

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href" , "htttps://twitter.com")
// myLink.setAttribute("Title" , "Twitter")

/****************************************************************************/
// /*
// - DOM [Check Attributes]
// */

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//     if (myP.getAttribute("data-src") === "") {
//         myP.removeAttribute("data-src")
//     }else{
//         myP.setAttribute("data-src" , "New Value")
//     }
// }else{
//     console.log(`Not Found`);
// }


// if (myP.hasAttributes()) {
//     console.log(`Has Attributes`);
// }

/****************************************************************************/
// /*
// - DOM [Create Elements]
// */

// let myElement = document.createElement("div")
// let myAttribute = document.createAttribute("data-custom")
// let myText = document.createTextNode("Product One")
// let myComment = document.createComment("This Is Div")


// myElement.className = "product"
// myElement.setAttributeNode(myAttribute)
// myElement.setAttribute("data-test" , "Testing")
// console.log(myElement);

// myElement.appendChild(myComment)
// myElement.appendChild(myText)
// document.body.appendChild(myElement)



// for (let i = 0; i < 100; i++) {

// let myMainElement = document.createElement("div")
// let myHeading = document.createElement("h2")
// let myParagraph = document.createElement("p")

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Discription");

// //Add Heading
// myHeading.appendChild(myHeadingText)

// myMainElement.appendChild(myHeading)

// myMainElement.appendChild(myParagraph)
// //Add Heading
// myParagraph.appendChild(myParagraphText)

// myMainElement.className = "product"
// document.body.appendChild(myMainElement)
    
// }

/****************************************************************************/
// /*
// - Events
// */


// let btn = document.querySelector("#btn");

// btn.onclick = function () {
//     console.log("clicked");
// }

/****************************************************************************/
// /*
// - Events Practice
// */

// let userInput = document.querySelector("[name='username']")
// let ageInput = document.querySelector("[name='age']")

// document.forms[0].onsubmit = function (e) {
//     let userValid = false ;
//     let ageValid = false ;

//     if (userInput.value !== "" && userInput.value.length <= 10){
//         userValid = true ;
//     }

//     if (ageInput.value !== "") {
//         ageValid = true ; 
//     }

//     if (userValid === false || ageValid === false) {
//         e.preventDefault();
//     }
// }



// let one = document.querySelector(".one")
// let two = document.querySelector(".two")


// window.onload = function () {
//     two.focus();
// }


// one.onblur = function () {
//     document.links[0].click();
// }
/****************************************************************************/

// /*
// - Classlist
// */

// let element = document.querySelector("#my-div")

// console.log(element.classList);
// console.log(typeof(element.classList));
// console.log(element.classList.contains("hassan"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item(3));

// element.onclick = function () {
//     element.classList.add("hassan")
//     element.classList.remove("test")
//     element.classList.toggle("show")

// }

/****************************************************************************/
// /*
// - Css in javascript
// */

// let element = document.querySelector("#my-div")

// element.style.color = "red"
// element.style.fontWeight = "bold"

/****************************************************************************/
// /*
// - Add Event Listner
// */

// let myHeader = document.querySelector("h1");

// myHeader.addEventListener("click" , function () {
//     console.log("Yes, We Are The Champions");
// })

/****************************************************************************/
// Challenge


//Set Header
// let header = document.createElement("div");
// header.className = "header";
// header.style.display = "flex" 
// header.style.justifyContent = "space-between" 
// header.style.paddingRight = "25px" 
// header.style.paddingLeft = "25px" 


// //Set Logo
// let logo = document.createElement("span");
// logo.innerHTML = "Elzero";
// logo.style.color = "green"

// //Set Links
// let menu = document.createElement("ul")
// menu.className = "menu"
// menu.innerHTML ="<li class='links'>Home</li> <li class='links'>About</li> <li class='links'>Services</li> <li class='links'>Contact</li>"
// menu.style.display = "flex"
// menu.style.margin = "0"
// menu.style.listStyleType = "none"
// menu.style.gap = "20px"
// menu.style.fontSize = "20px"
// menu.style.alignItems = "center"


// // Put Content in the header
// header.appendChild(logo)
// header.appendChild(menu)
// document.body.appendChild(header)


// //Set Content Div 
// let content = document.createElement("div");
// content.className = "content"
// content.style.background = "#ececec"
// content.style.display = "grid"
// content.style.gridTemplateColumns = "repeat(auto-fill , minmax(250px , 1fr))"
// content.style.paddingLeft = "20px"
// content.style.paddingBottom = "15px"

// document.body.appendChild(content)


// for (let i = 1; i <= 15; i++) {
//     let product = document.createElement("div")
//     product.style.background = "#fff"
//     product.style.marginTop = "20px"
//     product.style.width = "fit-content"
//     product.style.padding = "5px 70px"
//     product.style.borderRadius = "7px"
//     product.style.display = "flex"
//     product.style.flexDirection = "column"
//     product.style.textAlign = "center"
//     product.innerHTML = `<span>${i}</span> Product`
//     product.className = "product"
//     content.appendChild(product)
// }

// //Set Footer
// let footer = document.createElement("footer");
// footer.className = "footer";
// footer.innerHTML = "Copyright 2021"
// footer.style.textAlign = "center" 
// footer.style.color = "#fff" 
// footer.style.backgroundColor = "green" 
// footer.style.padding = "15px" 

// document.body.appendChild(footer)
