const { check } = require("express-validator")

class AuthenticationValidator {
    adminRegister(req, res) {
        return [
            check("name")
                .not().isEmpty()
                .withMessage("لطفا نام خود را وارد کنید")
                .isLength({ min: 3, max: 20 })
                .withMessage("نام کاربری باید بیشتر از 3 و کمتر از 20 کاراکتر باشد"),
            check("lastname")
                .not().isEmpty()
                .withMessage("لطفا نام خانوادگی خود را وارد کنید")
                .isLength({ min: 3, max: 20 })
                .withMessage("نام خانوادگی باید بیشتر از 3 و کمتر از 20 کاراکتر باشد"),
            check("phone")
                .not().isEmpty()
                .withMessage("لطفا شماره همراه خود را وارد کنید"),
            check("password")
                .not().isEmpty()
                .withMessage("لطفا رمزعبور خود را وارد کنید")
                .isLength({ min: 3, max: 30 })
                .withMessage("رمزعبور باید بیشتر از 3 و کمتر از 30 کاراکتر باشد"),
        ]
    }
}

module.exports = new AuthenticationValidator()