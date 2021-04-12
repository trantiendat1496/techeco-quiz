const mongoose = require('mongoose');


const quizSchema =new mongoose.Schema({
    timing: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        default: []
    },
    correctAnswer: {
        default: []
    },
    level: {
        default: []
    },
    linkRef: {
        type: String,
        required: true
    },
    report: {
        type: String,
        required: true
    }
})

const Quiz = module.exports = mongoose.model('Quiz', quizSchema);


