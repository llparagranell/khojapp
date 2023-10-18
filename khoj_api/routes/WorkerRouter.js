const express = require('express');
const { workerdata, getworker,deleteworker } = require('../controlers/WorkerController');

const router = express.Router();

router.post('/postworker',workerdata);
router.get('/getworker',getworker);
router.delete('/deleteworker/:id',deleteworker)

module.exports = router;