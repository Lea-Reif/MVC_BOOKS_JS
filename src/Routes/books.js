const express =require('express');
const router =express.Router();
const control=require('../controllers/booksController');

router.get('/',control.list);
router.get('/book_create',control.create);
router.post('/add',control.add);
router.get('/remove/:ID',control.remove);
router.get('/update/:ID',control.update);
router.post('/update/:ID',control.edit);

module.exports=router;