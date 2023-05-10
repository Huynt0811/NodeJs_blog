import express, { Router } from "express";
import APIController from '../controller/APIController';
let router = express.Router();

const initAPIRoute = (app) => {
    // CRUD routes
    router.get("/users", APIController.getAllUssers); // method GET -> READ data
    router.post("/create-user", APIController.createNewUser); // method POST -> CREATE data
    router.put("/update-user/:id", APIController.updateUser); // method PUT -> UPDATE data
    router.delete("/delete-user/:id", APIController.deleteUser); // method PUT -> UPDATE data


    return app.use("/api/v1/", router);
};
export default initAPIRoute;
