import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AutenticateUserController } from "./controllers/AutenticateUserController";
import { CreateComplimentController } from "./controllers/CreateControllerController";

const router = Router();
const createUserController =  new CreateUserController();
const createTagController =  new CreateTagController();
const autenticateUserController =  new AutenticateUserController();
const createComplimentController = new CreateComplimentController();

//console.log("routes");
router.get("/test", (req, res) =>{
    return res.send("Hello GET!!")
});

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);
router.post("/login", autenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);


export {router};