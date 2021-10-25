const mongoose = require("../configs/database");
const Schema = mongoose.Schema

const CartSchema = new Schema({
        userId = { type: Number, required: true },
        products = [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }
        ],
    },
    { timestamps: true }
);
const Cart = mongoose.model("cart", CartSchema)

module.exports = Cart