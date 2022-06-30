const { check } = require("express-validator")

class CategoryValidator {
    addCategory(req, res) {
        return [
            check("title")
                .not().isEmpty()
                .withMessage("لطفا عنوان دسته بندی را وارد کنید")
                .isLength({ min: 3, max: 30 })
                .withMessage("عنوان دسته بندی باید بیشتر از 3 و کمتر از 30 کاراکتر باشد")
        ]
    }
}

module.exports = new CategoryValidator()