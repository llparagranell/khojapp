const Cart = require("../models/Cart");

exports.cart = async (req, res) => {
  var productsDetails = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  const { userid } = req.params;

  try {
    // const cart = new Cart({ userid });
    // cart.save();
    // res.json(cart);
    await Cart.findOneAndUpdate(
      { userid: userid },
      { $push: { products: productsDetails } }
    );
    res.status(200).json("Item added to cart successfully !!!");
  } catch (error) {
    console.log(error);
  }
};

exports.cartdata = async (req, res) => {
  try {
    const data = await Cart.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.cartdelete = async (req, res) => {
  try {
    const { userid } = req.params;
    await Cart.findByIdAndDelete(userid);
    res.json("Cart Deleted Succesfully !!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.productdelete = async (req, res) => {
  try {
    await Cart.findOneAndUpdate(
      { _id: req.params.cartid },
      { $pull: { products: { _id: req.params.productid } } }
    );
    res.json("Item Removed From Cart Succesfully !!!")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
