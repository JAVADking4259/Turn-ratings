const bl = require('../bussnesLogic/bl');
const uuid = require('uuid');
const moment = require('moment-jalaali');
const { validate } = require('../../../utils/validator');
const { registerSchema, loginSchema } = require('../../../utils/schema')

async function register(req, res) {
    try {
        const { body } = req;
        await validate(body, registerSchema)
        const inputData = {
            id: uuid.v4(),
            fullName: body.fullName,
            password: body.password,
            email: body.email,
            createdAt: moment().format('jYYYY/jMM/jDD -- HH:mm:ss'),
            role: "USER"
        }
        const result = await bl.register(inputData);
        res.send(result)
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}
async function login(req, res) {
    try {
        const { body } = req;
        const inputData = {
            email: body.email,
            password: body.password
        };
        await validate(body, loginSchema)
        const result = await bl.login(inputData);
        res.send(result)

    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};

module.exports = { register, login };