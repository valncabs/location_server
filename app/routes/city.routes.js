const express = require('express');
const router = express.Router();
const controller = require('../controllers/city.controller');

router.get('/', controller.getCities);


module.exports = router;
