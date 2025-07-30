console.log("Products frontend javascript file!");

$(function() {

  $(".new-product-status").on("change", async (e) => {
    const id = e.target.id;
    const productStatus = $(`#${id}.new-product-status`).val();
    console.log("id:", id);
    console.log("productStatus:", productStatus);

    try{
      const response = await axios.post(`/admin/product/${id}`, {productStatus: productStatus});
      console.log("response:", response);
      const result = response.data;

      if(result.data){
        console.log("Product updated!");
        $(".new-product-status").blur();
      }else{
        alert("Product update failed!");  
      }
    }catch(err){
      console.log(err);
      alert("Product update failed!");
    }
  });

})

async function removeItem(id){
  if(confirm("Do you want to delete this item from database?")){
    await axios.get(`/admin/product/remove/${id}`);
    window.location.reload();
  }
}