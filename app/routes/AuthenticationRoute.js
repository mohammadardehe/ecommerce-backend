const router = require("express").Router()

const AuthenticationController = require("../controllers/AuthenticationController")

const AuthenticationValidator = require("../validators/AuthenticationValidator")

router.post("/admin/register", AuthenticationValidator.adminRegister(), AuthenticationController.adminRegister)

module.exports = router