const repository = require('../repository/repo');
const bcrypt = require('bcryptjs');

async function addUser(inputData) {
    const user = await repository.findUser({ email: inputData.email });
    if (user) {
        throw {
            status: 409,
            data: {
                message: "please login"
            }
        }
    }
    inputData.password = await bcrypt.hash(inputData.password, 10);
    await repository.addUser(inputData);
    delete inputData._id
    return {
        message: "اطلاعات با موفقیت ذخیره شد",
        result: inputData
    };
}
async function getUsers() {
    const result = await repository.getUsers();
    return {
        message: 'اطلاعات کاربران با موفقیت دریافت شد',
        result
    }
}
async function getUser(inputData) {
    const result = await repository.getUser(inputData);
    return {
        message: 'اطلاعات کاربر با موفقیت دریافت شد',
        result
    }
}
async function updateUser(inputData) {
    const result = await repository.updateUser(inputData);
    return {
        message: "اطلاغات با موفقیت ویرایش شد",
        result
    }
}
async function deleteUser(inputData) {
    await repository.deleteUser(inputData);
    return {
        message: 'اطلاعات کاربر با موفقیت حذف شد'
    }
}
module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };