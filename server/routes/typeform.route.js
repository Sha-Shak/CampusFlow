const router = require('express').Router();
<<<<<<< Updated upstream
const {
  postTypeform,
  getAllCandidates,
  getCandidateById,
} = require('../controllers/typeform.controller');

//typeform
router.post('/typeform-webhook', postTypeform);
router.get('/getAllCandidates', getAllCandidates);
router.get('/getCandidateById/:id', getCandidateById);
=======
const { postTypeform } = require('../controllers/typeform.controller');

//typeform
router.post('/typeform-webhook', postTypeform);
>>>>>>> Stashed changes

module.exports = router;
