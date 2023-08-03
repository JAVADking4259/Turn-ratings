const {Router} = require('express');
const router = Router();
const {addService,getOneService,updateService,deleteService} = require('./controller/controller');


router.post('/service',addService);
router.get('/service',getOneService);
router.get('/service/:id',getOneService);
router.put('/service',updateService);
router.delete('/service/:id',deleteService);

module.exports=router;