import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express"; //need to install types lib (yarn add @types/express)
import "express-async-errors" // for error handling


import { router } from "./routes";
import "./database"; // by default index file is imported


const app = express();

app.use(express.json());

app.use(router);

// error handling MUST be after the routes
app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return res.status(400).json({
                error: err.message
            })
        }
        //all other error will get status 500
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        })
    })

app.listen(3000, () => console.log("Server is running NOW"));
//listen takes a port and a function to be called