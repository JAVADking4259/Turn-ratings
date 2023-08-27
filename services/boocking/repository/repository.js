const config = require('../../../utils/initializer');

async function boocking(inputData){
    await config.mongoDB.collection('times').insertOne(inputData);
};
async function getTimes(){
    return await config.mongoDB.collection('times').find({},{projection:{_id:0}}).toArray();
};
async function getTime(query){
    return await config.mongoDB.collection('times').findOne({date:query.date},{projection:{_id:0}});
};
async function deleteTime(inputData){
    await config.mongoDB.collection('times').updateOne({date:inputData.date},{$pull:{times:{$in:[inputData.time]}}})
    return await config.mongoDB.collection('times').findOne({date:inputData.date},{projection:{_id:0}})
};


module.exports={boocking,getTimes,getTime,deleteTime};