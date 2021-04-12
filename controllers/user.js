const jwt = require('jsonwebtoken');

const User = require('../models/user')


const encodedToken = () => {
    return  jwt.sign({
        startDate: new Date().getTime(),
        endDate: new Date().setDate(new Date().getDate() + 1),
        _id: 123
    }, 'abc');
}

const index = async (req, res) => {
    const user = await User.find({})

    return res.status(200).json({
        message: 'user',
        results: user
    })
}

const start = (req, res) => {
    
}

const submit = (req, res) => {
    const token = encodedToken();
    return res.status(200).json({
        startDate: new Date().getTime(),
        _id: 123,
        token: token

    })
}


module.exports = {
    index,
    submit,
    encodedToken,
    start
}
