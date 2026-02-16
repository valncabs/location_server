const express = require('express');
const router = express.Router();
const controller = require('../controllers/department.controller');

router.get('/', controller.getDepartments);


module.exports = router;
