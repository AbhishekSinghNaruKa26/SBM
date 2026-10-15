import cartModel from "../Models/cartModel.js";

const addToCart = async (req, res) => {
  try {
    const { user, product } = req.body;
    if (!user || !product) {
      return res
        .status(400)
        .json({ success: false, message: "User and product are required" });
    }
    let cart = await cartModel.findOne({ user });
    if (!cart) {
      cart = new cartModel({ user, items: [{ product, quantity: 1 }] });
    } else {
      const exitingItem = cart.items.find(
        (item) => item.product.toString() === product
      );
      if (exitingItem) {
        exitingItem.quantity += 1;
      } else {
        cart.items.push({ product, quantity: 1 });
      }
    }
    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//get product in cart allcart

const getCart = async (req, res) => {
  try {
    const { user } = req.params;
    const cart = await cartModel.findOne({ user }).populate("items.product");
    if (!cart) {
      return res.status(200).json({ success: true, cart: { items: [] } });
    }
    return res.status(200).json({ success: true, cart });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// delete cart

const deleteCart = async (req, res) => {
  try {
    const { user, product } = req.body;
    const cart = await cartModel.findOne({ user });
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    cart.items = cart.items.filter(
      (item) => item.product.toString() != product
    );
    await cart.save();
    res.status(200).json({ success: true, message: "Item removed" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export { addToCart, getCart, deleteCart };
