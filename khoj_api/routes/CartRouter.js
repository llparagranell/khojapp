const { cart, cartdata, cartdelete, productdelete }  = require('../controlers/CartController');
const express = require('express');

const router = express.Router();

router.post('/:userid',cart);
router.get('/cartdata',cartdata);
router.delete('/:userid',cartdelete);
router.delete('/product/:cartid/:productid',productdelete)




module.exports = router;