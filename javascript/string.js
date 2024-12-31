console.log("This is string tutorial");
let user_name = "bhupendra Kumar sAh";
let user_name2 = "roshan kumar";
console.log(user_name.length);
console.log(user_name[0]);
console.log(user_name.toUpperCase());
console.log(user_name.toLowerCase());

console.log("this is template literal");
console.log(`my name is ${user_name} and my friend name is ${user_name2}`);

console.log("escape character");
console.log("this is escape character \"bhupendra\"");

console.log(user_name.slice(1, 5));

console.log(user_name.concat(user_name2));
console.log(user_name.concat(user_name2,"bhupendra","kdjfl"));

console.log("string is immutable");
console.log(user_name);