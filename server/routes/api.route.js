const express = require('express');
const router = express.Router();
const getCompanyName = require('../controllers/thirdPart.controller');

router.get('/crunchbase/:query', getCompanyName);
module.exports = router;
