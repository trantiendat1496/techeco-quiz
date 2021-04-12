const Quiz = require('../models/quiz')


const getAllQuiz = async (req, res) => {
    const quiz = await Quiz.find({})

    return res.status(200).json({
        message: 'quiz',
        results: quiz
    })
}

const newQuiz = async (req, res, next) => {

    const newQuiz = new Quiz({
        timing: req.body.timing,
        question: req.body.question,
        linkRef: req.body.linkRef,
        report: req.body.report
    })

    await newQuiz.save()

    return res.status(201).json({quiz: newQuiz})
}

module.exports = {
    getAllQuiz,
    newQuiz
}
