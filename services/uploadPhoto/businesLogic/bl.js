const repo = require('../repository/repo');
const path = require('path');

async function uploadaPhoto(req){
    const fileName = `${req.file.filename}`;
    const inputData = {
        photoUrl:`http://localhost:5000/uploads/${fileName}`,
        id:req.body.id
    }
    let result = await repo.uploadPhoto(inputData);
    return{
        message:'success',
        result
    }
};
async function deletePhoto(inputData){
    await repo.deletePhoto(inputData);
    return {
        status: 'success',
        message: 'عکس پروفایل با موفقیت حذف شد',
    }

}


module.exports={uploadaPhoto,deletePhoto};