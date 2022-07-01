const { check } = require("express-validator")

class BrandValidator {
    addBrand() {
        return (
            [
                check("title")
                    .not().isEmpty()
                    .withMessage("لطفا عنوان برند خود را وارد کنید")
                    .isLength({ max: 20 })
                    .withMessage("عنوان برند نباید بیشتر از 20 کاراکتر باشد")
            ]
        )
    }
}

module.exports = new BrandValidator()