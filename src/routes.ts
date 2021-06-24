import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";

const router = Router();
const createUserController =  new CreateUserController();
const createTagController =  new CreateTagController();

//console.log("routes");
router.get("/test", (req, res) =>{
    return res.send("Hello GET!!")
});

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);



export {router};