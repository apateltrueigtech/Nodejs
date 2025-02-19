const express = require("express");
const users =require('./MOCK_DATA.json')
const app = express();
const PORT =8000;


// Routes
app.get('/users',(req,res)=>{
    const html =`
    <ul>
    ${users.users.map(user => `<li>${user.id}</li>`)}
    </ul>
    `;
    res.send(html);
})

//REST API


app.get('/api/users',(req,res)=>{
    return res.json(users);
});

app.get("/api/users/:id",(req,res)=>{
    // console.log(users)
        const id = Number(req.params.id);
        const user = users.users.find((user)=> user.id === id);
        // if(!user){
        //     return res.status(404).json({error:"User not found"});
        // }
        return res.json(user);
});
  
    

app.post('/api/users',(req,res)=>{
   return res.json({status:"pending"});
});

app.patch('/api/users/:id',(req,res)=>{
    return res.json({status:"pending"});
 });

app.delete('/api/users/:id',(req,res)=>{
    return res.json({status:"pending"});
});

app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`))




































// const http = require("http");
// // const fs = require("fs");
// // const url = require("url");
// const express = require("express");

// const app = express();

// app.get('/',(req,res)=>{
//     return res.send("Hello from Home Page");
// })
// app.get('/about',(req,res)=>{
//     return res.send("Hello About  Page");
// })

// function myHandler(req,res){

// }


// // const myServer =http.createServer((app)=>{
// //     if(req.url === "/favicon.ico") return res.end();
// //     const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
// //     const myUrl = url.parse(req.url,true);
// //     console.log(myUrl);
// //     fs.appendFile("log.txt",log,(err,data)=>{
// //         // res.end("Hello From Server");
// //         switch(myUrl.pathname){
// //             case '/':
// //                 if(req.method==='GET') res.end("HomePage")
// //             break
// //             case '/about': 
// //             const username = myUrl.query.myname;
// //             res.end(`Hi , ${username}`);
// //             break;
// //             case '/search':
// //                 const search = myUrl.query.search_query;
// //                 res.end('Here are your results' + search);
// //             case "/signup":
// //                 if(req.method==='GET') res.end("This is a signup Form");
// //                 else if(req.method==="POST"){
// //                     //DB Query
// //                     res.end("Success")
// //                 }          
// //                 default:
// //                 res.end("404 Not Found");
        
//         //  }
//         //  )
// //     // console.log("New Req Received.");
 
// // });
// app.listen(8000,()=> console.log("Server Started"));
