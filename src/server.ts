import express from "express"; //need to install types lib (yarn add @types/express)
const app = express();

//ROUTES

app.get("/test", (req, res) =>{
    return res.send("Hello GET!!")
} );

//BROWSER DOES NOT POST - USE POSTMAN or something else
app.post("/test-post", (req, res)=>{
    return res.send("Hello post");
})

app.listen(3000, ()=> console.log("Server is running NOW"));
//listen takes a port and a function to be called