const express = require("express")
const app = express()
require('express-async-errors')
require('express-rate-limit')
const cors = require('cors')
const xss = require('xss-clean')
const helmet = require('helmet')

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(express.urlencoded({ extended: false }))

const auth = require("../middleware/auth.js")
const logger = require("../middleware/logger.js")
const notFound = require("../middleware/notFound")
const customErrorHandler = require("../errors/customErrorHandler")

const authRouter = require("../router/auth.js")
const productRouter = require("../router/products.js")
const userRouter = require("../router/users.js")
const cartRouter = require("../router/cart.js")
const orderRouter = require("../router/order.js")
const paymentRouter = require("../router/payment.js")

app.use(logger)
app.use(express.static("./public"));
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", auth, userRouter)
app.use("/api/v1/products",auth, productRouter)
app.use("/api/v1/cart",auth, cartRouter)
app.use("/api/v1/orders", auth, orderRouter)
app.use("/api/v1/payment", auth, paymentRouter)


app.use(notFound)
app.use(customErrorHandler)

module.exports = app