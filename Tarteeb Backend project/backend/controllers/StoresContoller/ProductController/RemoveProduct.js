import Product from "../../../models/stores/Products.js";



// Product Delete

export const deleteProduct = async (req, res, next) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted.");
    } catch (err) {
      next(err);
    }
  };