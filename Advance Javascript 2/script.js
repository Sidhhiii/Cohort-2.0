// Exercise 1

// function afterDelay(cb, time){
//     setTimeout(()=>{
//         cb()
//     }, time)
// }

// afterDelay(function(){
//     console.log("callback executed");
// }, 2000)

// Exercise 2

// function getUser(username, cb){
//     setTimeout(() => {
        
//         let user= {id: 121, username: username}
//         cb(user)
        
//     }, 1000);
// }

// getUser("karan56_@", function(user){
//     console.log("Username:", user.username);
    
//     getUserPosts(user.id, function(posts) {
//         console.log(posts);
//     })
// })

// function getUserPosts(id, cb) {
//     setTimeout(()=>{
//         let posts = ["post1", "post2", "post3", "post4"];
//         cb(posts)
//     },1000)
// }

// Exercise 3

// function loginUser(username, cb) {
//     setTimeout(() => {
//         let user = {id: 1267, username: username}
//         cb(user)
//     }, 1000);
// }

// function fechPermission(userid, cb) {
//     setTimeout(() => {
//         let permission = ["read","write","delete","update"]
//         cb(permission)
//     }, 1000);
// }

// function loadDashboard( cb) {
//     setTimeout(() => {
//         cb()
//     }, 1000);
// }

// loginUser("mala_@123", function(user) {
//     console.log(user.username);
//     fechPermission(user.id, function(permission) {
//         console.log(permission);
//     })
//     loadDashboard(function() {
//         console.log("Dashboard Loaded");
//     })
    
// })

// Practice Questions

// Q1 FoodOrder--->

// function placeOrder(orderName, cb){
//     setTimeout(() => {
//         let food ={
//             id: 23,
//             orderName: orderName,
//             orderType: "Italian Meal"
//         }
//         cb(food)
//     }, 1000);
// }

// placeOrder("Pizza", function(food){
//     console.log(`You have placed order of ${food.orderName}`);
//     prepareFood(food.id, function(message) {
//         console.log(message);
//         serveFood(food.orderType, function(msg) {
//             console.log(msg);
//         })
//     })
// })

// function prepareFood(id,cb) {
//     setTimeout(() => {
//         cb(`Food of this id:${id} is ready`)
//     }, 1000);
// }

// function serveFood(type,cb) {
//     setTimeout(() => {
//         cb(`${type} is served`)
//     }, 1000);
// }
    

// Q1 Social Media Profile--->

function loginUser(userEmail, cb) {
    setTimeout(() => {
        let profile ={
            id: "kamla_2312",
            folllowers: 892,
            following: 923
        }
        cb(profile)
    }, 1000);
}

function fetchPosts(userid, cb) {
    setTimeout(() => {
        
    }, 1000);
}