const express = require('express')
const router = express.Router()
const { getOrder, postOrder, patchOrder, deleteOrder } = require('../controller/order')

router.route('/')
    .get(getOrder)
    .post(postOrder)

router.route('/:id')
    .get(getOrder)
    .patch(patchOrder)
    .delete(deleteOrder)

module.exports = router