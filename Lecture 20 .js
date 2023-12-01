// /*
// - OOP ====> Object Oriented Programming
// ----Constructor
// */

// function User(id , userName , salary) {
//     this.id = id ;
//     this.userName = userName ;
//     this.salary = salary + 1000 ;
// }

// let userOne = new User(100 , "Hassan" , 5000)
// let userTwo = new User(101 , "Ahmed" , 8000)
// let userThree = new User(102 , "Nagy" , 10000)


// console.log(userOne.id);
// console.log(userOne.userName);
// console.log(userOne.salary);

// console.log(userTwo.id);
// console.log(userTwo.userName);
// console.log(userTwo.salary);


// console.log(userThree.id);
// console.log(userThree.userName);
// console.log(userThree.salary);


/***********************************************************************************/
// /*
// - OOP ====> Object Oriented Programming
// ----Constructor (New Syntax)
// */

// class User{
//     constructor(id , userName , salary){
//         this.id = id ;
//         this.userName = userName ;
//         this.salary = salary ;
//     }
// }

// let userOne = new User(100 , "Hassan" , 5000)

// console.log(userOne.id);
// console.log(userOne.userName);
// console.log(userOne.salary);

/***********************************************************************************/
// /*
// - OOP ====> Object Oriented Programming
// ----Deal with properites and methods
// */

// class User{
//     constructor(id , userName , salary){
//         //Properties
//         this.id = id ;
//         this.userName = userName ;
//         this.salary = salary ;
//         this.msg = function () {
//             return `Hello ${this.userName} Your Salary is ${this.salary}`
//         }
//     }
//     //Methods 
//     writeMsg(){
//         return  `Hello ${this.userName} Your Salary is ${this.salary}`
//     }
// }

// let userOne = new User(100 , "Hassan" , 5000)

// console.log(userOne.msg());
// console.log(userOne.writeMsg());

/***********************************************************************************/
// /*
// - OOP ====> Object Oriented Programming
// ----Update properties
// ----Bilt in constructors
// */

// class User{
//    constructor(id , userName , salary){
//       //Properties
//       this.id = id ;
//       this.userName = userName ;
//       this.salary = salary ;
//       this.msg = function () {
//             return `Hello ${this.userName} Your Salary is ${this.salary}`
//       }
//    }
//    //Methods 
//    writeMsg(){
//       return  `Hello ${this.userName} Your Salary is ${this.salary}`
//    }
//    // Updating Method
//    updateName(newName){
//       this.userName = newName ;
//    }
// }

// let userOne = new User(100 , "Hassan" , 5000)

// console.log(userOne.userName);
// userOne.updateName("Mohsen");
// console.log(userOne.userName);

/***********************************************************************************/
// /*
// - OOP ====> Object Oriented Programming
// ----Static Properities And Methods
// */


// class User{
//    static count = 0 ;
//    constructor(id , userName , salary){
//       //Properties
//       this.id = id ;
//       this.userName = userName ;
//       this.salary = salary ;
//       User.count++ ;
//    }
//    //Methods 
//    static noOfMembers(){
//       return `We Have ${User.count} Members`
//    }
// }

// let userOne = new User(100 , "Hassan" , 5000)
// let userTwo = new User(101 , "Ahmed" , 8000)
// let userThree = new User(102 , "Nagy" , 10000)

// console.log(User.noOfMembers());

/***********************************************************************************/
// /*
// - OOP ====> Object Oriented Programming
// ----Class ===> Inheritance
// */


// //Parent
// class User{
//    constructor(id , userName , salary){
//       //Properties
//       this.id = id ;
//       this.userName = userName ;
//       this.salary = salary ;
//    }
//    //Methods 
//    sayHello(){
//       return `Hello ${this.userName}`
//    }
// }

// // Drived Class
// class Admin extends User{
//    constructor(id , userName , salary , permission){
//       super(id , userName , salary)
//       this.permission = permission;
//    }
// }



// let userOne = new User(100 , "Hassan" , 5000)
// let adminOne = new Admin(100 , "Sameh" , 5000 , true)

// console.log(adminOne.sayHello());
// console.log(adminOne.permission);

/***********************************************************************************/
// /*
// - OOP ====> Object Oriented Programming
// ----Encapsulation (private)
// */

// class User{
//    #eSalary;
//    constructor(id , userName , eSalary){
//       //Properties
//       this.id = id ;
//       this.userName = userName ;
//       this.#eSalary = eSalary ;
//    }
//    //Methods 
//    getSalary(){
//       return parseInt(this.#eSalary)
//    }
// }

// let userOne = new User(100 , "Hassan" , "5000 Geny")

// console.log(userOne.getSalary());

/***********************************************************************************/
// /*
// - OOP ====> Object Oriented Programming
// ----Prototype
// */

// class User{
//    #eSalary;
//    constructor(id , userName , eSalary){
//       //Properties
//       this.id = id ;
//       this.userName = userName ;
//       this.#eSalary = eSalary ;
//    }
//    //Methods 
//    getSalary(){
//       return parseInt(this.#eSalary)
//    }
// }

// console.log(User.prototype);
/***********************************************************************************/