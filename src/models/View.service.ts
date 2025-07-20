import Errors, { HttpCode } from "../libs/Errors";
import { View, ViewInput } from "../libs/types/view";
import ViewModel from "../schema/View.model"
import { Message } from "../libs/Errors";

class ViewService {
  private readonly viewModel

  constructor(){
    this.viewModel = ViewModel;
  }

  public async checkViewExistance(input: ViewInput): Promise<View> {
    return await this.viewModel
      .findOne( {memberId: input.memberId, viewRefId: input.viewRefId} )
      .exec();
  }

  public async insertMemberView(input: ViewInput): Promise<View>{
    try{
      return await this.viewModel.create(input);
    } catch(err){
      console.log("ERROR, model:insertMemberView", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ViewService;


/**
TASK S

Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

MASALAN: missingNumber([3, 0, 1]); return 2

Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
'2' soni tushib qolgan.
**/


/** 
function missingNumber(arr: number[]){
  arr.sort();
  let missingNum = 0;
  
  for (let i=0; i < arr.length - 1; i++){
    if((arr[i+1] - arr[i]) !== 1){
      missingNum = arr[i]+1;
    }
  }

  return missingNum;
}

console.log("Missing number:", missingNumber([7, 4, 5]));
**/