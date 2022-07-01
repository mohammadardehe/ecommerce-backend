const mongoose = require("mongoose")

const brandSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true })

const BrandModel = mongoose.model("brand", brandSchema)

module.exports = BrandModel