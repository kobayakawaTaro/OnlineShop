const express = require("express")
const app = express()

const auth = require("../middleware/auth.js")
const logger = require("../middleware/logger.js")

const authRouter = require("../router/auth.js")
const productRouter = require("../router/products.js")
const userRouter = require("../router/users.js")

const notFound = require("../middleware/notFound")
const customErrorHandler = require("../errors/customErrorHandler")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("../public"))

app.use(logger)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", auth, userRouter)
app.use("/api/v1/products",auth, productRouter)
//app.use("/api/v1/payments",auth, paymentRouter)

app.use(notFound)
app.use(customErrorHandler)

module.exports = app