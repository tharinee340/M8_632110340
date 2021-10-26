const mongoose = require("../configs/database");
const Schema = mongoose.Schema
const { boolean } = require("webidl-conversions")

const ProductSchema = new Schema({
        title = { type: String, required: true },
        desc = { type: String , required: true , unique: true},
        img = { type: String, required: true},
        size = { type: String },
        color = { type: Array },
        price = { type: Number, required: true},
    },
    { timestamps: true }
);
const Product2 = mongoose.model("products2", ProductSchema)

module.exports = Product2