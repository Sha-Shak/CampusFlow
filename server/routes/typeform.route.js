const router = require('express').Router();
const {
  postTypeform,
  getAllCandidates,
  getCandidateById,
} = require('../controllers/typeform.controller');

//typeform
router.post('/typeform-webhook', postTypeform);
router.get('/getAllCandidates', getAllCandidates);
router.get('/getCandidateById/:id', getCandidateById);

module.exports = router;
