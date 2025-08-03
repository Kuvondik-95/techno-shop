console.log('Product frontend javascript file!');

function uploadPhotoInput(className){
  $(`.${className}`).click();
}

// $(function() {
//   $("#productName.product-name").on("change", async (e) => {
//     console.log("Changing...")
//     // const id = e.dataset.prodId;
//     const val = e.target.value;

//     // const productStatus = $(`#${id}.new-product-status`).val();
//     // console.log("id:", id);
//     console.log("val", val);
//   })
// })

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
  const productDesc = $(".product-desc").val().trim();
  
  let prodObj = {};
  prodObj.productName = productName; 
  console.log(prodObj);
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




async function UpdateProduct(productId){
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
  const productDesc = $(".product-desc").val().trim();
  
  let prodObj = {};
  prodObj.productName = productName; 
  prodObj.productBrand = productBrand; 
  prodObj.productCollection = productCollection; 
  prodObj.productOperationSystem = productOperationSystem; 
  prodObj.productRam = productRam; 
  prodObj.productMemory = productMemory; 
  prodObj.productPrice = productPrice; 
  prodObj.productLeftCount = productLeftCount; 
  prodObj.productCpuSpeed = productCpuSpeed; 
  prodObj.productResolution = productResolution; 
  prodObj.productScreenSize = productScreenSize; 
  prodObj.productBattery = productBattery; 
  prodObj.productCamera = productCamera; 
  prodObj.productDesc = productDesc; 


  try{
    const response = await axios.post(`/admin/product/${productId}`, prodObj);
    console.log("response:", response);
    const result = response.data;
    console.log(result);
    if(result.data){
      alert("Product updated!");
      window.location.assign("http://localhost:4003/admin/product/all");
    }else{
      alert("Product update failed!");  
    }
  }catch(err){
    console.log(err);
    alert("Product update failed!");
  }
}