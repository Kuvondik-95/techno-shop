import MemberService from "../models/member.service";
import { T } from "../libs/types/common";
import {NextFunction, Request, Response} from "express";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";

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

    // const file = req.file;
    // if(!file) throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

    const newMember = req.body;
    // newMember.memberImage = file?.path;
    
    newMember.memberType = MemberType.OWNER;
    const result = await memberService.processSignup(newMember);

    req.session.member = result;
    req.session.save(function(){
      // res.send(result);
      res.redirect("/admin/product/all");
    });
  }catch(err){
    console.log("Error, processSignup:", err);
    const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(`<script> alert("${message}"); window.location.replace('/admin/signup') </script>`);
  }
};

ownerController.processLogin = async (req: AdminRequest, res: Response) => {
  try{
    console.log("processLogin");
    console.log("req.body", req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    // TODO: SESSION AUTHENTICATION
    req.session.member = result;
    req.session.save(function(){
      res.redirect("/admin/product/all");
    });

  }catch(err){
    console.log("Error, processLogin:", err);
    const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(`<script> alert("${message}"); window.location.replace('/admin') </script>`);
  }
};

ownerController.logout = async (req:AdminRequest, res:Response) => {
  try{
    console.log("logout");
    req.session.destroy(function(){
      res.redirect("/admin");
    })
    
  }catch(err){
    console.log("Error, logout:", err);
    res.redirect("/admin");
  }
}

ownerController.getUsers = async (req:Request, res:Response) => {
  try{
    console.log("getUsers");
    const result = await memberService.getUsers();

    res.render("users", {users: result});
  }catch(err){
    console.log("Error, getUsers:", err);
    res.redirect("/admin/login");
  }
}

ownerController.updateChosenUser = async (req:Request, res:Response) => {
  try{
    console.log("updateChosenUser");
    const result = await memberService.updateChosenUser(req.body);
    
    res.status(HttpCode.OK).json({ data: result });
  }catch(err){
    console.log("Error, updateChosenUser:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
}

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

ownerController.verifyOwner = (req:AdminRequest, res:Response, next: NextFunction) => {
    if(req.session?.member?.memberType === MemberType.OWNER) {
      req.member = req.session.member;
      next();
    }else{
      const message = Message.NOT_AUTHENTICATED;
      res.send(`<script> alert("${message}"); window.location.replace("/admin") </script>`);
    }
}


export default ownerController;