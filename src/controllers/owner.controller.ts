import MemberService from "../models/member.service";
import { T } from "../libs/types/common";
import {Request, Response} from "express";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const ownerController: T = {};
const memberService = new MemberService();

ownerController.goHome = (req: Request, res: Response) => {
  try{
    console.log("goHome");
    res.send("Home Page!");
  }catch(err){
    console.log("Error, goHome:", err);
  }
};

ownerController.getLogin = (req: Request, res: Response) => {
  try{
    console.log("getLogin");
    res.send("Login Page!");
  }catch(err){
    console.log("Error, getLogin:", err);
  }
};

ownerController.processLogin = async (req: Request, res: Response) => {
  try{
    console.log("processLogin");
    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
    
    res.send(result);
  }catch(err){
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};

ownerController.getSignup = (req: Request, res: Response) => {
  try{
    console.log("getSignup");
    res.send("Signup Page!");
  }catch(err){
    console.log("Error, getSignup:", err);
  }
};

ownerController.processSignup = async (req: Request, res: Response) => {
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

export default ownerController;