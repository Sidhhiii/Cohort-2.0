// Section 1

// let laptop = {
//     brand: 'Dell',
//     price: 37500,
//     Start: function(){
//         console.log("Laptop Started");
//     } ,
//     priceInc: function(){
//         console.log(this.price + (this.price * (10/100)));
         
//     }
// }

// If I need to do same structure with 10 laptops with differennt data then I had to create that structure for 10 times also if any changes or problems appears then it would be difficult for me to track/remember eveything

// Section 2

// class Employee{
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     showDetails(){
//         return `name: ${this.name}, salary: ${this.salary}`
//     }
// }

// let employee1 = new Employee("Mina Goyal", 45000);
// let employee2 = new Employee("kamal Gokhale", 37000);
// let employee3 = new Employee("Girija Patil", 25000);

// while creating 100's of employee I don't need to repeat the same structure code instead I will create new object each time whenever i want in much cleaner way and where I can reuse that code structure. Managing becomes easier. 

// Section 3

// class BankAccount{
//     constructor(accountHolderName, balance){
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }

//     deposit(amount){
//         let currentBal = this.balance + amount;
//         this.balance = currentBal
//         // console.log(currentBal);
//         return currentBal;
//     }
// }

// let user1 = new BankAccount("Tripathi khana", 45000)
// user1.deposit(2500)
// let user2 = new BankAccount("Kamini Nath", 50000);

// So in this line let user1 = new BankAccount("Tripathi khana", 45000) we created an object using class which has a structure we call it as blueprint which has a prototype object which has default constructor pointing to the class. Constructor function will call it will then point to created inital object because of this keyword so each object has their own properties and methods but if theyre in the prototype then they are shared to each object that has been created with that particular class. Ultimately each object has their properties so they dont affect each other 

// Section 4

// let profile = {
//     username: "Mihir khole",
//     printName: function(){
//         console.log(this.username);
//     }
// }

// profile.printName();

// let print = function(){
//         console.log(this.username);
//     };

// print();

// when we call profile.printName() this will refer as how is it being called its refers to profile object so it will give "Mihir khole" but when we call print() which has no owner to call so in non-strict it has window i.e global object annd in strict it is undefined 

// this is the keyword which basically all about who is the owner of that call or how is being called 

// section 5

// function Vehicle(type, wheels){
//     this.type = type;
//     this.wheels = wheels;   
// }

// Vehicle.prototype.describe = function(){
//         console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
// }

// let v1 = new Vehicle('car', 4)
// let v2 = new Vehicle('bike', 2)
// let v3 = new Vehicle('tempo', 3)

// v1.describe();
// v2.describe();
// v3.describe();

// here the prototype method is benificial because prototype is object that is attached to every function so it becames shared memory if we add any function or value using prototype keyword to that function we created it will be used if any objects wants that is created by that function, its like shared method.

// Section 6

// function showbrand(){
//     console.log(this.brand);
// }

// let b1 = {
//     brand: "Bata"
// }

// let b2 = {
//     brand: "Paytaan"
// }

// showbrand.call(b1);
// showbrand.call(b2);

// Section 7

// function introduce(city, role){
//     console.log(`My name is ${this.name}, lived near ${city}. I do ${role} for living`);
// }

// let obj = {
//     name: "Ramnath"
// }

// introduce.apply(obj, ["Indrapuri", "SWE"])

// when we use call method where we pass arguments after refering obj to thisv value then giving arguments if function have parameters. In apply method where we pass arguments in array which then Javascript engine internally converts each element of array into the seprate element which used as arguments after refering obj .

// Section 8

// function greet(){
//     console.log(`hello ${this.name}`);
// }

// let obj = { name: "Karan Arora" }

// let newGreet = greet.bind(obj)

// newGreet()

