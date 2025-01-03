console.log("this is document selector by id classes");
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);  
// boxes[2].style.backgroundColor = "red";

// let box3 = document.getElementById("box3")
// console.log(box3);
// box3.style.backgroundColor = "pink";

// this will return the first element which has class box
// let query = document.querySelector(".box");
// console.log(query);

// document.querySelector(".box").style.backgroundColor="blue";

// let query2 = document.querySelector("#box2");
// query2.style.backgroundColor="yellow";

// let all = document.querySelectorAll(".box");
// console.log(all);

// this is not valid because querySelectorAll return all the node list 
// document.querySelectorAll(".box").style.backgroundColor="blue"

// document.querySelectorAll(".box").forEach((element) => {
//     // console.log(element);
//     element.style.backgroundColor = "red";
// })

// console.log(document.getElementsByTagName("div"));

// let e = document.getElementsByTagName("div");
// console.log(e[3].matches("#box2"));

let e = document.querySelectorAll(".box")
// console.log(e);
console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));