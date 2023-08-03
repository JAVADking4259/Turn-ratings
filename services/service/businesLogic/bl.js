const repo = require('../repository/repository');

async function addService(inputData){
    await repo.addService(inputData);
    delete inputData._id
    return{
        message: "اطلاعات با موفقیت ذخیره شد",
        result: inputData
    }
};
async function getOneService(inputData){
   const result = await repo.getOneService(inputData);
   return(
    result
   )
};
async function getService(){
    const result = await repo.getService();
    return{
        result
    }
};
async function updateService(inputData){
   const result = await repo.updateService(inputData);
   return{
    message:"success",
    result
   }
};
async function deleteService(inputData){
    await repo.deleteService(inputData);
    return{
        message:"خدمات شمابا موفقیت حذف شد"
    }
};

module.exports={addService,getOneService,getService,updateService,deleteService};