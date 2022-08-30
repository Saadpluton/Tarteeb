import Product from "../../../models/stores/Products.js";

// Product Get Only Specific Id

export const getProduct = async (req, res, next) => {
    try {
      const list = await Product.findById(req.params.id);
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  