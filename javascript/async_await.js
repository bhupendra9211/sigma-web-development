
console.log("first line")
async function getData(){
    let data = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(444);
        }, 4000);
    })
    return data;
}


// let data = getData();
// console.log(data);
// console.log("second line")
// console.log("third line")

// let data = getData();
// data.then((v)=>{

//     console.log(data);
//     console.log("second line")
//     console.log("third line")
// })

async function main(){
    let data = await getData();
    console.log(data);
    console.log("second line")
    console.log("third line")
}

main();


