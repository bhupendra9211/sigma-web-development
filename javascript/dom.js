console.log("this is dom child parent sibling");
// document.title = "hello"

// console.log(document.body.childNodes)
// console.log(document.body.childNodes[0])
// console.log(document.body.childNodes[1])

// this will gives the output as text node and the div node
// let cont = document.body.childNodes[1];
// console.log(cont.childNodes);
// console.log(cont.firstChild);
// console.log(cont.childNodes[0])
// console.log(cont.childNodes[1])

// this will give the output as first element node 

let cont = document.body.childNodes[1];
// console.log(cont);
// console.log(cont.firstElementChild);
// console.log(cont.lastElementChild);
// console.log(document.body.firstElementChild);

console.log(cont.firstElementChild.parentElement);
console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.children);
console.log(document.body.firstElementChild.children[3]);
console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);
console.log(document.body.children[1].rows);