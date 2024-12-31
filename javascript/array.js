// console.log("this is array tutorial \n and array is mutable");

// let fruits = ['banana','mango','apple','orange']
// console.log(fruits);

// fruits.forEach(element => {
//     console.log(element);
// });

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]

// let fruits2 = fruits.map((fruits) => fruits +" " + "yummy");
// console.log(fruits2)

// let numbers = [1,2,3,4,5,6];
// console.log(numbers);
// console.log(numbers.toString());
// console.log(numbers.join(" and "))

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
let numbers = [1,2,3,4,5,6,7];

// for (const key in obj) {
//     console.log(obj[key]);
// }

// for (const element of numbers) {
//     console.log(element);
// }

// let numbers2 = numbers.map(
//     (element,index,array) => {
//         return element ** 2;
//     }
// )

// console.log(numbers2);

// let numbers_filter = numbers.filter((element => {
//     return element % 2 == 0;
// }))
// console.log(numbers_filter)

let reduced_array = numbers.reduce((element => {
    return element+element
}))
console.log(reduced_array);