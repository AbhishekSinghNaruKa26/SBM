import productModel from "../Models/productModel.js";
const addproducts = async (req, res) => {
  try {
    const {
      name,
      company,
      rating,
      price,
      orignal,
      category,
      img,
      description,
      vendor,
      tags,
    } = req.body;
    if (
      !name ||
      !company ||
      !rating ||
      !price ||
      !orignal ||
      !category ||
      !img ||
      !description ||
      !vendor ||
      !tags
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please field all required field" });
    }
    const newProduct = new productModel({
      name,
      company,
      rating,
      price,
      orignal,
      category,
      img,
    });
    await newProduct.save();
    res.status(200).json({
      success: true,
      message: "products added successfully",
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getallproducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await productModel.findByIdAndDelete(id);
    if (!deleted) {
      return res
        .status(500)
        .json({ success: false, message: "product not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "product deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export { addproducts, getallproducts, deleteproduct };
