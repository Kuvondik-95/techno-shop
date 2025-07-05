import express from "express";
import ownerController from "./controllers/owner.controller";

const routerAdmin = express.Router();

routerAdmin.get("/", ownerController.goHome);

routerAdmin
    .get("/login", ownerController.getLogin)
    .post("/login", ownerController.processLogin);

routerAdmin
    .get("/signup", ownerController.getSignup)
    .post("/signup", ownerController.processSignup);

routerAdmin.get("/logout", ownerController.logout);
routerAdmin.get("/check-me", ownerController.checkAuthSession);

export default routerAdmin;