const express = require('express')
const router = express.Router()
const {postPayment} = require('../controller/payment')

router.route('/')
    .post(postPayment)

module.exports = router