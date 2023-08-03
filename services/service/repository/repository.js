const config = require('../../../utils/initializer');

async function addService(inputData){
    await config.mongoDB.collection('services').insertOne(inputData);
};
async function getService(){
    return await config.mongoDB.collection('services').find({},{projection:{_id:0}}).toArray();
};
async function getOneService(inputData){
    return await config.mongoDB.collection('services').findOne({id:inputData.id},{projection:{_id:0}});
};
async function updateService(inputData){
    await config.mongoDB.collection('services').updateOne({id:inputData.id},{$set:inputData});
    return await config.mongoDB.collection('services').findOne({id:inputData.id},{projection:{_id:0}});
};   
async function deleteService(inputData){
    const result = await config.mongoDB.collection('services').deleteOne({id:inputData.id});
    if (result.deleteCount === 0) {
        throw {
            status: 404,
            error: { message: 'مقاله ای برای حذف کردن یافت نشد' }
        }
    }
};


module.exports={addService,getOneService,getService,updateService,deleteService};