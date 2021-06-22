import "reflec-metadata";
import express from "express"; //need to install types lib (yarn add @types/express)
const app = express();

// **** ROUTES ****
/* Routes params -  part of URL
    https://server:port/test/{id}
    const id = request.params.id;
 * Query params - filters, key=value pairs, preceeded of ?: "?key=value". Multiple params split by "&"
    https://server:port/products?name=shirt&size=large

 * Body params -  json object
*/


app.listen(3000, ()=> console.log("Server is running NOW"));
//listen takes a port and a function to be called