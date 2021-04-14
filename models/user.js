const mongoose = require('mongoose');


const userSchema =new mongoose.Schema({
    timing: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const User = module.exports = mongoose.model('User', userSchema);


