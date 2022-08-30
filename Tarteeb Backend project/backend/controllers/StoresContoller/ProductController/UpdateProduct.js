import Product from "../../../models/stores/Products.js";


//Product Update

export const updateProduct = async (req, res, next) => {
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateProduct);
    } catch (err) {
      next(err);
    }
  };