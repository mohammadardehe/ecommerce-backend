const router = require("express").Router()

const AuthenticationRoute = require("./AuthenticationRoute")

router.use("/authentication", AuthenticationRoute)

module.exports = router