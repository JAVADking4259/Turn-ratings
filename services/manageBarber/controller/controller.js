const bl = require('../businnesLogic/bl');
const uuid = require('uuid');
const {validate} = require('../../../utils/validator');
const { barbers } = require('../../../utils/schema');

async function addBarber(req,res){
try { 
    const {body} = req;
    await validate(body,barbers);
    const inputData = {
        id:uuid.v4(),
        barberName:body.barberName,
        address:body.address,
        instagramId:body.instagramId,
        photo:'http://localhost:5000/uploads',
        description:body.description,
        role:"BARBER"
    };
    const result = await bl.addBarber(inputData);
    res.send(result);
    
} catch (err) {
    err.status = err.status || 500;
    res.status(err.status).send({
        error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
    })
}
};
async function getBarbers(req, res) {
    try {
        let result;
        //if (req.role === 'USER')
        //    req.params.id = req.userId;
        if (req.params.id)
            result = await bl.getBarber({ id: req.params.id });
        else
            result = await bl.getBarbers();

        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};
async function updateBarber(req, res) {
    try {
        if (!req.query.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کاربر را وازد نمایید' }
            }
        }
        const inputData = {
            id: req.role === 'USER' ? req.userId : req.query.id,
            ...req.body
        };
        let result = await bl.updateBarber(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};
async function deleteBarber(req,res){
    try {
        if (!req.params.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کاربر را وارد نمایید' }
            }
        }
        const inputData = { id: req.params.id };
        let result = await bl.deleteBarber(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

module.exports={addBarber,getBarbers,getBarbers,updateBarber,deleteBarber};