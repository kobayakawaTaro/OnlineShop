const express = require('express')
const {getCart,patchCart} = require('../controller/cart')
const router = express.Router()

router.route('/')
    .get(getCart)
    .patch(patchCart)

module.exports = router