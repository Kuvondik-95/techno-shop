import express from "express";
import ownerController from "./controllers/owner.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utilities/uploader";

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

/** Product **/

routerAdmin.get(
    '/product/all', 
    ownerController.verifyOwner, //AUTHORIZATION MIDDLEWARE
    productController.getAllProducts);

routerAdmin.post(
    '/product/create', 
    ownerController.verifyOwner,  //AUTHORIZATION MIDDLEWARE
    // makeUploader("products").array("productImages", 5), // UPLOADER MIDDLEWARE
    productController.createNewProduct);

routerAdmin.post(
    '/product/:id', 
    ownerController.verifyOwner, //AUTHORIZATION MIDDLEWARE
    productController.updateChosenProduct);

export default routerAdmin;