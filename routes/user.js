const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')

router.route('/')
    .get(userController.index)


router.route('/submit')
    .post(userController.submit)

router.route('/token')
    .get(userController.encodedToken)



module.exports = router
