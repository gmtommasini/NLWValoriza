import "reflect-metadata";
import express from "express"; //need to install types lib (yarn add @types/express)

import "./database"; // by default index file is imported
const app = express();

//ROUTES


app.listen(3000, ()=> console.log("Server is running NOW"));
//listen takes a port and a function to be called