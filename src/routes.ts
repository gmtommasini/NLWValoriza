import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController =  new CreateUserController();
console.log("routes");
router.get("/test", (req, res) =>{
    return res.send("Hello GET!!")
});

router.post("/users", createUserController.handle)


export {router};