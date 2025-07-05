import { LoginInput, Member } from "../libs/types/member";
import { T } from "../libs/types/common";
import {Request, Response} from "express";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/member.service";
import Errors from "../libs/Errors";

const memberService = new MemberService();
const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try{
    console.log("signup");
    const input: MemberInput = req.body;
    const result: Member = await memberService.signup(input);
    // TODO: TOKENS AUTHENTICATION

    res.json({ member: result });
  }catch(err){
    console.log("Error, signup:", err);
    if(err instanceof Errors) res.status(err.code).json(err)
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try{
    console.log("login");
    const input: LoginInput = req.body;
    const result: Member = await memberService.login(input);
    // TODO: TOKENS AUTHENTICATION
    
    res.json({ member: result });
  }catch(err){
    console.log("Error, login:", err);
    if(err instanceof Errors) res.status(err.code).json(err)
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;