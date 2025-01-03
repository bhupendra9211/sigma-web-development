function randomColor(){
    let code1 = Math.floor(Math.random()*100);
    let code2 = Math.floor(Math.random()*100);
    let code3 = Math.floor(Math.random()*100);
    let rgb = [code1,code2,code3]

    return rgb;
}

// let color = randomColor();
// console.log(color);
document.querySelectorAll(".box").forEach((e) => {
    let color = randomColor();
    e.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
})

// document.querySelectorAll(".box").forEach((e,i) => {
//     let colors = ['red','green','black','yellow','blue'];
//     let randomColor = colors[Math.floor(Math.random()*colors.length)];
//     // let randomColor = colors[i];
//     console.log(randomColor);
//     e.style.backgroundColor = randomColor;
// })