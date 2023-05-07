const FormResponse = require('./models/typeform.model');
const router = require('express').Router();
const typeformController = require('./controllers/typeform.controller');

//typeform
router.post('/typeform-webhook', typeformController.postTypeform);

module.exports = router;
