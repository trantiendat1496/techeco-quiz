require('dotenv').config();


const express = require('express')
const app = express()
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/techeco-quiz',{useNewUrlParser: true, useNewUrlParser: true,  useUnifiedTopology: true});



const connectdb = async ()=>{
    mongoose.connect('mongodb://localhost:27017/techeco-quiz', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(function(){
        console.log("db connected");
    });
}
connectdb();


app.use(bodyParser.json())



const quizRoute = require('./routes/quiz')
const userRoute = require('./routes/user')

//Routes
app.use('/quiz', quizRoute)
app.use('/user', userRoute)

// Routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is OK!'
    })
})

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Server listenning on port ' + port);
});
