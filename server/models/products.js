const mongoose = require("../configs/database");
const Schema = mongoose.Schema

const ProductSchema = new Schema({
        title: { type: String, required: true },
        desc: { type: String , required: true , unique: true},
        img: { type: String, required: true},
        size: { type: String },
        color: { type: Array },
        price: { type: Number, required: true},
    },
    { timestamps: true }
);
const Products = mongoose.model("products", ProductSchema)

module.exports = Products