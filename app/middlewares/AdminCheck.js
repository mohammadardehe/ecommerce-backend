const jwt = require("jsonwebtoken")

const AdminCheck = (req, res, next) => {
    try {
        const token = req.header("token")
        if (!token) return res.status(406).send({ error: "شما اجازه دسترسی ندارید" })
        const result = jwt.verify(token, "jsonwebtoken")
        req.admin = result
        next()
    } catch (error) {
        return res.status(500).send({ error: "خطایی سمت سرور رخ داده است" })
    }
}

module.exports = AdminCheck