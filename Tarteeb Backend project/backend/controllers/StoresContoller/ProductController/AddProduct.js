import Product from "../../../models/stores/Products.js";


//Product Create
export const createProduct = async (req, res, next) => {
  const product = new Product(req.body);
  try {
    const savedproduct = await product.save();
    res.status(200).json(savedproduct);
  } catch (err) {
    next(err);
  }
};

