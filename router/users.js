const express = require('express')
const {getUser,patchUser,deleteUser} = require('../controller/users')
const router = express.Router()

router.route('/')
    .get(getUser)
    .patch(patchUser)
    .delete(deleteUser)

module.exports = router