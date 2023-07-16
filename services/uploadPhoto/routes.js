const {Router} = require('express');
const router = Router();
const {uploadPhoto,deletePhoto} = require('./controller/controller');
const {upload} = require('../../utils/upload');

router.post('/upload',upload.single('photo'),uploadPhoto);
router.put('/upload/:id',deletePhoto);





module.exports=router;