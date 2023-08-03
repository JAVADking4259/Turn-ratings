const bl = require ('../businesLogic/bl');

async function addService(req,res){
    try {
        const {body} = req;
        const inputData = {
            id:body.id,
            hairCut:body.hairCut,
            faceCorrection:body.faceCorrection,
            specialCorrection:body.specialCorrection,
            hairColoring:body.hairColoring,
            hairKeratin:body.hairKeratin,
            skinCare:body.skinCare
        }
        const result = await bl.addService(inputData);
        res.status(200).send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};
async function getOneService(req,res){
    try {
        let result;
        if (req.params.id)
            result = await bl.getOneService({ id: req.params.id });
        else
            result = await bl.getService();
        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};
async function updateService(req,res){
try {
    if(!req.query.id){
        throw {
            sataus:400,
            error: { message: 'شناسه کاربر را وازد نمایید' }
        }};
        const inputData = {
            id: req.role === 'USER' ? req.userId : req.query.id,
            ...req.body
        };
const result = await bl.updateService(inputData)
res.send(result);    
} catch (err) {
    err.status = err.status || 500;
    res.status(err.status).send({
        error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
    })

}
};
async function deleteService(req,res){
    try {
        if (!req.params.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کاربر را وارد نمایید' }
            }
        }
        const inputData = { id: req.params.id };
        let result = await bl.deleteService(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};

module.exports={addService,getOneService,updateService,deleteService};