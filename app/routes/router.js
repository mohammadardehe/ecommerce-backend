const router = require("express").Router()

const AuthenticationRoute = require("./AuthenticationRoute")
const CategoryRoute = require("./CategoryRoute")
const BrandRoute = require("./BrandRoute")

router.use("/authentication", AuthenticationRoute)
router.use("/category", CategoryRoute)
router.use("/brand", BrandRoute)

module.exports = router