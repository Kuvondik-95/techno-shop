import { T } from "../libs/types/common";
import {Request, Response} from "express";

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
  res.send("Home Page!");
};

memberController.getLogin = (req: Request, res: Response) => {
  res.send("Login Page!");
};

memberController.getSignup = (req: Request, res: Response) => {
  res.send("Signup Page!");
};


export default memberController;