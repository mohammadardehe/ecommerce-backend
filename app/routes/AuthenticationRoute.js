const router = require("express").Router()

const AuthenticationController = require("../controllers/AuthenticationController")

const AuthenticationValidator = require("../validators/AuthenticationValidator")

router.post("/admin/register", AuthenticationValidator.adminRegister(), AuthenticationController.adminRegister)
router.post("/admin/login", AuthenticationValidator.adminLogin(), AuthenticationController.adminLogin)

module.exports = router