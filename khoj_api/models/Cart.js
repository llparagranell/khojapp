const mongoose = require("mongoose");

const CartModel = mongoose.Schema({
  userid: {
    type: String,
  },
  products: [
    {
      name: {
        type: String,
      },
      category: {
        type: String,
      },
      price: {
        type: String,
      },
      quantity: {
        type: String,
      },
    },
  ],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cart", CartModel);
