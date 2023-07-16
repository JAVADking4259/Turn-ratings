const config = require('../../../utils/initializer');

async function uploadPhoto(inputData){
    await config.mongoDB.collection('barbers').updateOne({id:inputData.id},{$set:{photo:inputData.photoUrl}});
    return config.mongoDB.collection('barbers').findOne({id:inputData.id},{projection:{_id:0}});
};
async function deletePhoto(inputData){
    await config.mongoDB.collection('barbers').updateOne({id:inputData.id},{$set:{photo: 'http://localhost:5000/api/uploads' }})
};



module.exports={uploadPhoto,deletePhoto};