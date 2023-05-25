const express = require('express');
const router = express.Router();
const hrController = require('../controllers/hr.controller');

router.get('/test', hrController.test);
router.post('/stackWiseFilter', hrController.stackWiseFilter);

module.exports = router;
