const repository = require('../repository/repository');
const bcrypt = require('bcryptjs');

async function register(inputData) {
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
    await repository.register(inputData);
    delete inputData._id
    return {
        message: "success",
        result: inputData
    }
};
async function login(inputData) {
    try {
        const userData = await repository.findUser({ email: inputData.email });
        if (!userData) {
            throw {
                message: "کاربر مورد نظر یافت نشد",
                status: 404
            }
        }
        const isPasswordCorrect = await bcrypt.compare(inputData.password, userData.password);
        if (isPasswordCorrect) {
            return {
                status: 200,
                data: {
                    message: "welcome",
                    result: userData
                }
            }
        } else {
            throw {
                message: 'password or email is wrong ',
                status: 400
            }
        }
    } catch (err) {
        let statusCode = err.status || 400;
        throw {
            status: statusCode,
            data: {
                message: err.message,
            }
        }
    }
}

module.exports = { register, login };