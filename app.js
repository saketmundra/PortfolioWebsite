const express = require("express"); // Access

const app=express();

app.use(express.static("public"))

app.get("*", function(req, res){
    res.sendFile(__dirname+"/public/index.html")
})


let port = process.env.PORT || 5000;
let server=app.listen(port,()=>{
    console.log("listening to port " + port);
});