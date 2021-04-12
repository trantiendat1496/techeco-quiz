const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quiz')

router.get('/getAllQuiz', quizController.getAllQuiz)


router.post('/newQuiz', quizController.newQuiz)


module.exports = router
