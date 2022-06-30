const router = require("express").Router()

const { route } = require("./AuthenticationRoute")
const AuthenticationRoute = require("./AuthenticationRoute")
const CategoryRoute = require("./CategoryRoute")

router.use("/authentication", AuthenticationRoute)
router.use("/category", CategoryRoute)

module.exports = router