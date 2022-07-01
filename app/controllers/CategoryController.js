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
            } else {
                const category = await CategoryModel.findOne({ title: req.body.title })
                if (category) return res.status(400).json({ error: "نام دسته بندی تکراری میباشد" })
                const newCategory = new CategoryModel({
                    title: req.body.title
                })
                await newCategory.save()
                return res.status(200).json({ success: "دسته بندی جدید ایجاد شد" })
            }
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }

    async editCategory(req, res) {
        try {
            const result = validationResult(req)
            if (!result.isEmpty()) {
                const errors = []
                result.errors.forEach(el => {
                    errors.push({ msg: el.msg })
                });
                return res.json(errors)
            } else {
                let category = await CategoryModel.findById(req.params.id)
                if (!category) return res.status(404).json({ error: "چنین دسته بندی وجود ندارد" })
                category.title = req.body.title
                await category.save()
                return res.status(200).json({ success: "دسته بندی با موفقیت ویرایش شد" })
            }
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }
    async deleteCategory(req, res) {
        try {
            let category = await CategoryModel.findById(req.params.id)
            if (!category) return res.status(404).json({ error: "چنین دسته بندی وجود ندارد" })
            await category.delete()
            return res.status(200).json({ success: "دسته بندی با موفقیت حذف شد" })
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }

    async getAllCategory(req, res) {
        try {
            const categories = await CategoryModel.find()
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }

    async getOneCategory(req, res) {
        try {
            let category = await CategoryModel.findById(req.params.id)
            if (!category) return res.status(404).json({ error: "چنین دسته بندی وجود ندارد" })
            return res.status(200).json(category)
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }
}

module.exports = new CategoryController()