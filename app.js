const express = require("express");
const app = express();
console.log(app);
const port = 3000;

app.get("/",(req,res)=>{
   res.status(200).json([
    {
        "id":1,
        "name":"Sallal"
    },
    {
        "id":2,
        "name":"Balach"
    },
    {
        "id":3,
        "name":"Harbyar"
    }
   ])
})

app.listen(port,()=>{
    console.log("Working");
})