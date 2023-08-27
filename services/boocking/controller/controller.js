const bl = require('../businnesLogic/bl');

async function boocking(req,res){
try {
    const {body} = req;
    const inputData = {
        day:body.day,
        date:body.date,
        times:body.times
    };
    const result = await bl.boocking(inputData);
    res.status(200).send(result);
} catch (err) {
    console.log(err)
    err.status = err.status || 500;
    res.status(err.status).send({
        error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
    })
}
};
async function getTimes(req, res) {
    try {
        let result;
        //if (req.role === 'USER')
        //    req.params.id = req.userId;
        if (req.query.date)
            result = await bl.getTime({ date: req.query.date });
        else
            result = await bl.getTimes();

        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};
async function deleteTime(req,res){
    try {
        const inputData = {
            date:req.body.date,
            time:req.body.time
        }
        const result = await bl.deleteTime(inputData);
        res.status(200).send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};
module.exports={boocking,getTimes,deleteTime};