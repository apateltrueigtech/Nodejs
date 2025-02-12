const fs = require("fs");

// synchronous call to write a file
fs.writeFileSync('./test.txt','Hey There');

// Async
fs.writeFile('./test2.txt','Hey There Async',(err)=>{})

//Read file
const result =fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

// fs.readFileSync("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./test.txt",Hey there Aditi)