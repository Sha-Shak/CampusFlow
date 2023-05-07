const router = require('express').Router();
const { postTypeform } = require('../controllers/typeform.controller');

//typeform
router.post('/typeform-webhook', postTypeform);

module.exports = router;
