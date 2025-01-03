document.querySelectorAll(".box").forEach((e,i) => {
    let colors = ['red','green','black','yellow','blue'];
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    // let randomColor = colors[i];
    console.log(randomColor);
    e.style.backgroundColor = randomColor;
})