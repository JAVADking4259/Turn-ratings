const {Router} = require('express');
const router = Router();
const {aboutUs,getAboutUs,uploadPhoto,deletePhoto} = require('./controller/controller');
const {upload} = require('../../utils/upload');3


router.post('/aboutUs',aboutUs);
router.get('/aboutUs',getAboutUs);
router.post('/upload',upload.single('photo'),uploadPhoto);
router.put('/upload/:id',deletePhoto);

module.exports=router;