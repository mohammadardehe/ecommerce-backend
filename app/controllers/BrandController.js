const BrandModel = require("../models/BrandModel")
const { validationResult } = require("express-validator")

class BrandController {
    async addBrand(req, res) {
        try {
            const result = validationResult(req)
            if (!result.isEmpty()) {
                const errors = []
                result.errors.forEach(el => {
                    errors.push({ msg: el.msg })
                });
                return res.status(400).json(errors)
            } else {
                const image = req?.file?.filename
                if (!image) return res.status(400).json({ error: "لطفا یک عکس انتخاب کنید" })
                const newBrand = new BrandModel({
                    title: req.body.title,
                    image: image
                })
                await newBrand.save()
                return res.status(200).json({ success: "دسته بندی جدید با موفقیت ثبت شد" })
            }
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }
}

module.exports = new BrandController()