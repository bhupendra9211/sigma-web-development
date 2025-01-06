let number = [1,2,3,4];
console.log(number);
console.log(...number);

let user_name = "bhupendra";
console.log(...user_name);

let array_name = [...user_name];
console.log(array_name);

let fruit = ["apple","mango"]
let vegetable = ["carrot","gajar"]

let food = [fruit,vegetable]
console.log(food);

let foods = [...fruit,...vegetable]
console.log(foods);