console.log("this is all about promises");

// let promise = new Promise((resolve,reject) =>{
//     let success = true;
//     // let success = false;
//     if(success){
//         resolve("operation was sucessfully done");
//     }
//     else{
//         reject(" failed ! ");
//     }
// });

// promise.then((message)=>{
//     console.log(message);
// }).catch((err) =>{
//     console.log(err);
// })

// let promise = new Promise((resolve, reject) => {
//     // let isSuccessful = true;
//     let isSuccessful = false;
  
//     setTimeout(() => {
//       if (isSuccessful) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 2000); // Simulate an asynchronous task with setTimeout
//   });
  
//   // Handling the promise
//   promise
//     .then((message) => {
//       console.log("Success:", message);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

// Could be GET or POST/PUT/PATCH/DELETE
// fetch('https://dummyjson.com/todos/1')
// .then(res => res.json())
// .then(console.log);

/* { status: 'ok', method: 'GET' } */

// fetch("https://dummyjson.com/todos/1")
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })

let step1 = new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 complete"), 1000);
  });
  
  step1
    .then((message1) => {
      console.log(message1);
      return "Step 2 complete";
    })
    .then((message2) => {
      console.log(message2);
      return "Step 3 complete";
    })
    .then((message3) => {
      console.log(message3);
    });
  

  

