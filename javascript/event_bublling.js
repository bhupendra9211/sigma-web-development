console.log("this is about event bubbling")

// document.querySelector(".child").addEventListener("click",()=>{
//     alert("this is child")
// })

// let elements = document.getElementsByClassName("child");
// for(let element of elements){
//     element.addEventListener("click",()=>{
//         alert("this is child");
//     })
// }

// document.getElementById("child").addEventListener("click",()=>{
//     alert("this is child");
// })


// this is event bubbling

// document.querySelector(".child").addEventListener("click",()=>{
//     alert("this is child")
// })
// document.querySelector(".parent").addEventListener("click",()=>{
//     alert("this is parent")
// })
// document.querySelector(".grandparent").addEventListener("click",()=>{
//     alert("this is grandparent")
// })

// now how to stop event bubbling

document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("this is child")
})
document.querySelector(".parent").addEventListener("click",()=>{
    alert("this is parent")
})
document.querySelector(".grandparent").addEventListener("click",()=>{
    alert("this is grandparent")
})

function getRandomColor(){
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);

    return `rgb(${val1},${val2},${val3})`;
}

// setInterval(() => {
//     document.querySelector(".parent").style.backgroundColor = getRandomColor();
//     document.querySelector(".grandparent").style.backgroundColor = getRandomColor();
//     document.querySelector(".child").style.backgroundColor = getRandomColor();
// }, 1000);
// let a = setInterval(() => {
//     document.querySelector(".parent").style.backgroundColor = getRandomColor();
//     document.querySelector(".grandparent").style.backgroundColor = getRandomColor();
//     document.querySelector(".child").style.backgroundColor = getRandomColor();
// }, 1000);

// console.log(a);

// clearInterval(1);


let a = setTimeout(() => {
    document.querySelector(".parent").style.backgroundColor = getRandomColor();
    document.querySelector(".grandparent").style.backgroundColor = getRandomColor();
    document.querySelector(".child").style.backgroundColor = getRandomColor();
}, 5000);

// clearTimeout(1);

