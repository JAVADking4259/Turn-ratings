const repo = require('../repository/repository');

async function aboutUs(inputData){
    await repo.aboutUs(inputData);
    delete inputData._id
    return {
        message:"success",
        result:inputData
    }
};
async function getAboutUs() {
    const result = await repo.getAboutUs();
    return {
        message: 'اطلاعات کاربران با موفقیت دریافت شد',
        result
    }
};
async function uploadPhoto(req){
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

};
module.exports={aboutUs,getAboutUs,uploadPhoto,deletePhoto};