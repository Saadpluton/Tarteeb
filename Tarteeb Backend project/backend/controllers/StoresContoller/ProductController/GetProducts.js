import Product from "../../../models/stores/Products.js";

// Product Get All

export const getAllProduct = async (req, res, next) => {
    try {
      const Products = await Product.find();
      res.status(200).json(Products);
    } catch (err) {
      next(err);
    }
  };