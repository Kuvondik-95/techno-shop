console.log('Product frontend javascript file!');

function uploadPhotoInput(className){
  $(`.${className}`).click();
}



// $('#image-section-2').click(function(){
//   $('.image-two').click();
// });

// $('#image-section-3').click(function(){
//   $('.image-three').click();
// });

// $('#image-section-4').click(function(){
//   $('.image-four').click();
// });

// $('#image-section-5').click(function(){
//   $('.image-five').click();
// });

function validateForm(){
  const productStatus = $(".product-status").val();
  const productName = $(".product-name").val();
  const productBrand = $(".product-brand").val();
  const productCollection = $(".product-collection").val();
  const productOperationSystem = $(".product-op-sys").val();
  const productRam = $(".product-ram").val();
  const productMemory = $(".product-memory").val();
  const productPrice = $(".product-price").val();
  const productLeftCount = $(".product-left-count").val();
  const productCpuSpeed = $(".product-cpu-speed").val();
  const productResolution = $(".product-resolution").val();
  const productScreenSize = $(".product-screen-size").val();
  const productBattery = $(".product-battery").val();
  const productCamera = $(".product-camera").val();
  const productDesc = $(".product-desc").val();
  
  if(
    productStatus === "" ||
    productName === "" ||
    productBrand === "" ||
    productCollection === "" ||
    productOperationSystem === "" ||
    productRam === "" ||
    productMemory === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCpuSpeed === "" ||
    productResolution === "" ||
    productScreenSize === "" ||
    productBattery === "" ||
    productCamera === "" ||
    productDesc === ""
  ){
    alert("Please, insert all required details!");
    return false;
  }else{
    return true;
  }
}

function previewFileHandler (input, order) {
  const imgClassName = input.className;

  const file = $(`.${imgClassName}`).get(0).files[0];
  const fileType = file["type"];
  const validImageType = ["image/jpg", "image/jpeg", "image/png"];

  if(!validImageType.includes(fileType)){
    alert("Please, insert only jpeg, jpg and png!");
  }else{
    if(file){
      const reader = new FileReader();
      reader.onload = function(){
        $(`#image-section-${order}`).attr("src", reader.result);
      };

      reader.readAsDataURL(file);
    }
  }
}