const {Router} = require('express');
const router = Router();
const {addComment,getComments,deleteComment} = require('./controller/controller');

router.post('/comment',addComment);
router.get('/comment',getComments);
router.delete('/comment/:id',deleteComment);

module.exports=router;