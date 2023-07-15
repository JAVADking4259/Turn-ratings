const repo = require('../repository/repo');

async function addBarber(inputData){
    await repo.addBarber(inputData);
    delete inputData._id
    return{
        message: "اطلاعات با موفقیت ذخیره شد",
        result: inputData
    }
};
async function getBarbers(){
    const result = await repo.getBarbers();
    return{
        message:"اطلاعات کاربر",
        result
    }
};
async function getBarber(inputData){
    const result = await repo.getBarber(inputData);
    return {
        message: 'اطلاعات کاربر با موفقیت دریافت شد',
        result
    }
};
async function updateBarber(inputData){
    const result = await repo.updateBarber(inputData);
    return{
        message:"اطلاعات با موفقیت آ\دیت شد",
        result
    }
};
async function deleteBarber(inputData){
    await repo.deleteBarber(inputData);
    return{
        message:"کاربر با موفقیت حذف شد "
    }
};




module.exports={addBarber,getBarbers,getBarber,updateBarber,deleteBarber};