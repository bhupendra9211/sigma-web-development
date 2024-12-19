// variable names are case sensitive
a = "hello small a"
A = "hello capital A"
console.log(a)
console.log(A)

var num1 = 22  // can be re-declared and updated, global scope variable
console.log(num1)

let num2 = 44 // cannot be re-declared but can be updated, block scope variable
console.log(num2)

const num3 = 33 //connot be re-declared or updated, block scope varibale
console.log(num3)

const product = ["parker","black",5]
console.log(product)
console.log(product[2])

let color="black";

if(color === "black"){
    console.log("yes color is black")
}else{
    console.log("not a black color")
}

// condition in js
let age = 33;


console.log(age>18?"adult":"not adult")

// loops in js

for(let i=1; i<=5; i++){
    // console.log("hello world")
    console.log(i)
}

var user_name = "           Bhupendra Kumar Sah"
console.log(user_name)
var user_lower = user_name.toLowerCase()
console.log(user_lower)
var user_trim = user_lower.trim()
console.log(user_trim)
var user_length = user_trim.length
console.log(user_length)
// var length = user_name.length
// var user = user_name.toLocaleLowerCase
// var user_t = user.trim
var user_id = `your user id is ${user_trim}${user_length}`
console.log(user_id)



// function in js

function hello(){
    console.log("hello how are you")
}

hello();
hello();

function hello_name(name){
    console.log(`hello ${name}`)
}

hello_name("bhupendra");


const arrow_function = () =>{
    console.log("compact way of writing a function")
}

arrow_function();

const sum = (num1,num2) =>{
    console.log(num1+num2)
}

sum(11,22);



var numbers = [1,2,3,4,45,55,6]

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);
// }

numbers.forEach( numbers =>{
    console.log(numbers*numbers)

})


// let new_numbers = numbers.map((numbers) => {
//     return numbers*2;
// })
// console.log(new_numbers)

// let even_numbers = numbers.filter((numbers) => {
//     return numbers % 2 == 0;
// })
// console.log(even_numbers)
