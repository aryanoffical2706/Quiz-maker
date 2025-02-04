
const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/create', quizController.createQuiz);
router.get('/:id', quizController.getQuiz);
router.get('/', quizController.getAllQuizzes); 
router.post('/submit', quizController.submitQuiz);

module.exports = router;
