const express = require('express');
const router = express.Router();
const peerRatingController = require('../controllers/peerRating.contoller');

router.post('/addRating/:id', peerRatingController.addRating);

module.exports = router;
