const express = require("express");
const router = express.Router();
const {getProduct, postProduct, patchProduct, deleteProduct} = require("../controller/products.js");

router.route("/")
    .get(getProduct)
    .post(postProduct)

    .get(getProduct)
    .patch(patchProduct)
    .delete(deleteProduct)

module.exports = router;