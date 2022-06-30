const router = require("express").Router()

const CategoryController = require("../controllers/CategoryController")

const AdminCheck = require("../middlewares/AdminCheck")

const CategoryValidator = require("../validators/CategoryValidator")

router.post("/add", AdminCheck, CategoryValidator.addCategory(), CategoryController.addCategoryHandle)

module.exports = router