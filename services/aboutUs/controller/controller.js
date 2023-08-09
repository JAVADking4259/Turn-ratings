const bl = require('../businesLogic/bl');
const uuid = require('uuid');

async function aboutUs(req,res){
   try {
    const {body} = req;
    const inputData = {
       id:uuid.v4(),
       photo:'http://localhost:5000/uploads',
       text:body.text
    }
    const result = await bl.aboutUs(inputData);
    res.status(200).send(result);
   } catch (err) {
    err.status = err.status || 500;
    res.status(err.status).send({
        error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
    })
   }
};
async function getAboutUs(req, res) {
   try {
 const result = await bl.getAboutUs();
   res.send(result);
   } catch (err) {
       console.log(err)
       err.status = err.status || 500;
       res.status(err.status).send({
           error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
       })
   }
};
async function uploadPhoto(req,res){
    try {
    if (!req.file)throw {
     status:400,
     message:"عکسی انتخاب نشده است"
    }        
  let result = await bl.uploadPhoto(req);
  res.status(200).send(result);
} catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
        status: 'fail',
        message: err.message
    })
}};
const deletePhoto = async(req, res) => {
    try {
        const inputData = {
            id: req.params.id
        }
        let result = await bl.deletePhoto(inputData);
        res.status(200).send(result);

    } catch (err) {
        err.status = err.status || 400;
        res.status(err.status).send({
            status: 'fail',
            message: err.message
        })
    }
};
module.exports={aboutUs,getAboutUs,uploadPhoto,deletePhoto};