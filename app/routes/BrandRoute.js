const router = require("express").Router()

const BrandController = require("../controllers/BrandController")

const AdminCheck = require("../middlewares/AdminCheck")

const BrandValidator = require("../validators/BrandValidator")

//multer config
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + "-" + file.originalname)
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    }
})

router.post("/add", AdminCheck, upload.single("image"), BrandValidator.addBrand(), BrandController.addBrand)

module.exports = router