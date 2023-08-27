const {Router} = require('express');
const router = Router();
const {boocking,getTimes,deleteTime} = require('./controller/controller');

router.post('/boocking',boocking);
router.get('/boocking',getTimes);
router.get('/boocking',getTimes);
router.put('/boocking',deleteTime);

module.exports=router;