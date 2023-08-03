const config = require('../../../utils/initializer');

async function addBarber(inputData){
    await config.mongoDB.collection('barbers').insertOne(inputData);
};
async function getBarbers(){
    return await config.mongoDB.collection('barbers').find({},{projection:{description:0,_id:0}}).toArray();
};
async function getBarber(inputData){
    return await config.mongoDB.collection('barbers').findOne({id:inputData.id},{projection:{_id:0}})
};
async function updateBarber(inputData){
    await config.mongoDB.collection('barbers').updateOne({id:inputData.id},{$set:inputData})
    return await config.mongoDB.collection('barbers').findOne({id:inputData.id},{projection:{_id:0}})
};
async function deleteBarber(inputData){
    const result = await config.mongoDB.collection('barbers').deleteOne({id:inputData.id});
    if (result.deleteCount === 0) {
        throw {
            status: 404,
            error: { message: 'مقاله ای برای حذف کردن یافت نشد' }
        }
    }
};

module.exports={addBarber,getBarbers,getBarber,updateBarber,deleteBarber};