const express = require('express'); 
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');
const {addReview} = require('../controllers/reviewController');

router.post('/:id/reviews',protect,addReview); 

module.exports = router;