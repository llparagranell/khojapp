const { signup, login, logout, getusers ,deleteuser }  = require('../controlers/UserController');
const express = require('express');

const router = express.Router();

router.post('/sign',signup);
router.post('/login',login);
router.get('/logout',logout);
router.get('/get',getusers);
router.delete('/delete/:id',deleteuser)


module.exports = router;