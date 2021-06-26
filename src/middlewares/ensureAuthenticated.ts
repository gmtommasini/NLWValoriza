
import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
    sub: string;
} //just to force the the sub to be recognized as string

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    console.log("ensure login")

    //get token
    const authToken = req.headers.authorization; //comes with "Bearer "
    if (!authToken) {
        return res.status(401).end(); // unauthorized  and standard message (end)
    }

    //validate token
    const [, token] = authToken.split(" "); // this notation is very usefull to put the result of the splint in different variables
    try {
        //const decode =  verify(token ,"someHashCodeHere") //hash is the same used in the AutenticateUserService" 
        //console.log(decode)
        const { sub } = verify(token, "someHashCodeHere") as Ipayload; //sub is inside the decoded token
        req.user_id = sub;
        return next();

        /* instead of try-catch, I could use a callback inside verify() to handle the error*/
    } catch (error) {
        return res.status(401).end();
    }


    //retrieve user info

    if (true) {
        return next();
    }
    return res.status(401).json({
        error: "Unauthorized"
    });
}