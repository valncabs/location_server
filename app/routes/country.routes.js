const express = require('express');
const router = express.Router();
const controller = require('../controllers/country.controller');

router.get('/', controller.getCountries);


module.exports = router;
