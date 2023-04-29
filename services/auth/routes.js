const { Router } = require('express');
const router = Router();
const { register, login } = require('./controller/controller');


router.post('/register', register);
router.put('/login', login);


module.exports = router;