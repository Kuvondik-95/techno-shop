console.log("Signup frontend javascript file!");

function validateSignupForm(){
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $(".confirm-password").val();
  
  if(
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ){
    alert("Please insert all required field!");
    return false;
  }

  if( memberPassword !== confirmPassword){
    alert("Password differs, please check!")
    return false;
  }

  // const memberImage = $(".member-image").get(0).files[0].name ? $(".member-image").get(0).files[0].name : null;

  // if(!memberImage){
  //   alert("Please insert restaurant image!")
  //   return false;
  // }
}