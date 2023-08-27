const repo = require('../repository/repository');

async function boocking(inputData){
    await repo.boocking(inputData);
    delete inputData._id;
    return {
        message:"success",
        result:inputData
    }
};
async function getTimes(){
    const result = await repo.getTimes();
    return {
        message:"success",
        result
    }
};
async function getTime(inputData){
    const result = await repo.getTime(inputData);
    return {
        message:"success",
        result
    }
};
async function deleteTime(inputData){
   const result = await repo.deleteTime(inputData);
   return {
    message:"success",
    result
   }
};

module.exports={boocking,getTimes,getTime,deleteTime};