const {Router} = require('express');
const router = Router();
const {addBarber,getBarbers,updateBarber,deleteBarber} = require('./controller/controller');

router.post('/barber',addBarber);
router.get('/barber',getBarbers);
router.get('/barber/:id',getBarbers);
router.put('/barber',updateBarber);
router.delete('/barber/:id',deleteBarber);


module.exports=router;