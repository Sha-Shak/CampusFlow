const router = require('express').Router();
const {
  postTypeform,
  getAllCandidates,
} = require('../controllers/typeform.controller');

//typeform
router.post('/typeform-webhook', postTypeform);
router.get('/getAllCandidates', getAllCandidates);

module.exports = router;
