import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AutenticateUserController } from "./controllers/AutenticateUserController";

const router = Router();
const createUserController =  new CreateUserController();
const createTagController =  new CreateTagController();
const autenticateUserController =  new AutenticateUserController();


//console.log("routes");
router.get("/test", (req, res) =>{
    return res.send("Hello GET!!")
});

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);
router.post("/login", autenticateUserController.handle);


export {router};