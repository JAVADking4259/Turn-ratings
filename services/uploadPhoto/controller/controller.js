const bl = require('../businesLogic/bl');

async function uploadPhoto(req,res){
    try {
    if (!req.file)throw {
     status:400,
     message:"عکسی انتخاب نشده است"
    }        
  let result = await bl.uploadaPhoto(req);
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
}




module.exports={uploadPhoto,deletePhoto};
