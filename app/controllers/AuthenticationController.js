const AdminModel = require("../models/AdminModel")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")

class AuthenticationController {
    async adminRegister(req, res) {
        try {
            const result = validationResult(req)
            if (!result.isEmpty()) {
                const errors = []
                result.errors.forEach(el => {
                    errors.push({ msg: el.msg })
                });
                return res.json(errors)
            } else {
                const admin = await AdminModel.findOne({ phone: req.body.phone })
                if (admin) return res.status(400).json({ error: "شماره همراه قبلا ثبت شده است" })
                const newAdmin = new AdminModel({
                    name: req.body.name,
                    lastname: req.body.lastname,
                    phone: req.body.phone,
                    password: req.body.password,
                })
                await newAdmin.save()
                const data = {
                    id: newAdmin._id,
                    phone: newAdmin.phone,
                    admin: newAdmin.admin
                }
                const token = jwt.sign(data, "jsonwebtoken")
                return res.status(200).json({
                    token: token,
                    success: "مدیر جدید با موفقیت ایجاد شد",
                    info: newAdmin
                })
            }
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }

    async adminLogin(req, res) {
        try {
            const result = validationResult(req)
            if (!result.isEmpty()) {
                const errors = []
                result.errors.forEach(el => {
                    errors.push({ msg: el.msg })
                })
                return res.json(errors)
            } else {
                const admin = await AdminModel.findOne({ phone: req.body.phone, password: req.body.password })
                if (!admin) return res.status(404).json({ error: "اطلاعات وارد شده صحیح نمیباشد" })
                const data = {
                    id: admin._id,
                    phone: admin.phone,
                    admin: admin.admin
                }
                const token = jwt.sign(data, "jsonwebtoken")
                return res.status(200).json({
                    token: token,
                    success: " مدیر وارد شد",
                    info: admin
                })
            }
        } catch (error) {
            return res.status(500).json({ error: "خطایی سمت سرور رخ داده است" })
        }
    }
}

module.exports = new AuthenticationController()