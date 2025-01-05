
// function greeting_name(name){
//     console.log(`Hello ${name}`);
// }

// setTimeout(() => {
//     greeting_name("bhupendra");
// }, 3000);

// function totalSum(a,b,callback){
//     let result = a+b;
//     callback(result);
// }

// function display(result){
//     console.log(`total sum is : ${result}`)
// }

// totalSum(3,3,display);

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script> */}

console.log("kdfjlkd")
function loadScript(src,callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = () =>
        callback(script);
        document.head.append(script);
    
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js",(script)=>{
    alert("script is loaded")
});