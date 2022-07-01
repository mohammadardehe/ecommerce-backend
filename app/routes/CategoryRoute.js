const router = require("express").Router()

const CategoryController = require("../controllers/CategoryController")

const AdminCheck = require("../middlewares/AdminCheck")

const CategoryValidator = require("../validators/CategoryValidator")

router.post("/add", AdminCheck, CategoryValidator.addCategory(), CategoryController.addCategoryHandle)
router.put("/edit/:id", AdminCheck, CategoryValidator.addCategory(), CategoryController.editCategory)
router.delete("/delete/:id", AdminCheck, CategoryController.deleteCategory)
router.get("/getAll", AdminCheck, CategoryController.getAllCategory)
router.get("/getOne/:id", AdminCheck, CategoryController.getOneCategory)

module.exports = router