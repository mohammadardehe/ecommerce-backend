const CategoryModel = require("../models/CategoryModel")
const { validationResult } = require("express-validator")

class CategoryController {
    async addCategoryHandle(req, res) {
        try {
            const result = validationResult(req)
            if (!result.isEmpty()) {
                const errors = []
                result.errors.forEach(el => {
                    errors.push({ msg: el.msg })
                });
                return res.json(errors)
            }
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }
}

module.exports = new CategoryController()