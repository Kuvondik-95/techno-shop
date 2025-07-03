import MemberService from "../models/member.service";
import { T } from "../libs/types/common";
import {Request, Response} from "express";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response) => {
  try{
    console.log("goHome");
    res.send("Home Page!");
  }catch(err){
    console.log("Error, goHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try{
    console.log("getLogin");
    res.send("Login Page!");
  }catch(err){
    console.log("Error, getLogin:", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try{
    console.log("processLogin");
    res.send("processLogin!");
  }catch(err){
    console.log("Error, processLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try{
    console.log("getSignup");
    res.send("Signup Page!");
  }catch(err){
    console.log("Error, getSignup:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try{
    console.log("processSignup");
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.OWNER;
    
    const result = await memberService.processSignup(newMember);
    
    res.send(result);
  }catch(err){
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

export default restaurantController;