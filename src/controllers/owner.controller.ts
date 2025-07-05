import MemberService from "../models/member.service";
import { T } from "../libs/types/common";
import {Request, Response} from "express";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";

const ownerController: T = {};
const memberService = new MemberService();

ownerController.goHome = (req: Request, res: Response) => {
  try{
    console.log("goHome");
    res.render("home");
  }catch(err){
    console.log("Error, goHome:", err);
  }
};

ownerController.getLogin = (req: Request, res: Response) => {
  try{
    console.log("getLogin");
    res.render("login");
  }catch(err){
    console.log("Error, getLogin:", err);
  }
};

ownerController.getSignup = (req: Request, res: Response) => {
  try{
    console.log("getSignup");
    res.render("signup");
  }catch(err){
    console.log("Error, getSignup:", err);
  }
};

ownerController.processSignup = async (req: AdminRequest, res: Response) => {
  try{
    console.log("processSignup");
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.OWNER;
    const result = await memberService.processSignup(newMember);
    // TODO: SESSION AUTHENTICATION

    req.session.member = result;
    req.session.save(function(){
      res.send(result);
      // res.redirect("/admin/product/all");
    });
  }catch(err){
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

ownerController.processLogin = async (req: AdminRequest, res: Response) => {
  try{
    console.log("processLogin");
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    // TODO: SESSION AUTHENTICATION
    req.session.member = result;
    req.session.save(function(){
      res.send(result);
      // res.redirect("/admin/product/all");
    });

  }catch(err){
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};

ownerController.checkAuthSession = async (req:AdminRequest, res:Response) => {
  try{
    console.log("checkAuthSession");
    if(req.session?.member) res.send(`<script> alert("Hi ${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>` )

  }catch(err){
    console.log("Error, checkAuthSession:", err);
    res.send(err);
  }
};


export default ownerController;