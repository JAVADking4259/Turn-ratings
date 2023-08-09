const config = require('../../../utils/initializer');

async function aboutUs(inputData){
    await config.mongoDB.collection('aboutUs').insertOne(inputData);
};
async function getAboutUs() {
    return await config.mongoDB.collection('aboutUs').find({},{ projection: { _id: 0 } }).toArray();
};
async function uploadPhoto(inputData){
    await config.mongoDB.collection('aboutUs').updateOne({id:inputData.id},{$set:{photo:inputData.photoUrl}});
    return config.mongoDB.collection('aboutUs').findOne({id:inputData.id},{projection:{_id:0}});
};
async function deletePhoto(inputData){
    await config.mongoDB.collection('aboutUs').updateOne({id:inputData.id},{$set:{photo: 'http://localhost:5000/api/uploads' }})
};


module.exports={aboutUs,getAboutUs,uploadPhoto,deletePhoto};