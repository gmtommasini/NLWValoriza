import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AutenticateUserController } from "./controllers/AutenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListComplimentsSentByUserController } from "./controllers/ListComplimentsSentByUserController";
import { ListComplimentReceivedByUserController } from "./controllers/ListComplimentsReceivedByUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController =  new CreateUserController();
const createTagController =  new CreateTagController();
const autenticateUserController =  new AutenticateUserController();
const createComplimentController = new CreateComplimentController();
const listComplimentsSentByUserController = new ListComplimentsSentByUserController();
const listComplimentsReceivedByUserService = new ListComplimentReceivedByUserController();

//console.log("routes");
router.get("/test", (req, res) =>{
    return res.send("Hello GET!!")
});

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", autenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/sent", ensureAuthenticated, listComplimentsSentByUserController.handle)
router.get("/users/compliments/received", ensureAuthenticated, listComplimentsReceivedByUserService.handle)
router.get("/tags/list", ensureAuthenticated, new ListTagsController().handle);
router.get("/users/list", ensureAuthenticated, ensureAdmin, new ListUsersController().handle);

//rouser.use(ensureAdmin); 
/* Using ensureAdmin like this, all routes from this point will have admin autorizarion validated
alternatively, we can use ensureAdmin function passed as parameter to router.post:
router.post("/xpto", ensureAdmin, anotherFunction, ..., createUserController.handle);
*/
export {router};