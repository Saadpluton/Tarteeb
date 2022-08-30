import mongoose from "mongoose";
import Product from "../../../models/stores/Products.js";

// Product Subtract Specific Id

export const SubtractProductQuantity = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);
    
    const product = await Product.findById(id);

    const updatedPost = await Product.findByIdAndUpdate(id, { Quantity: product.Quantity - 1 }, { new: true });
    
    res.json(updatedPost);
}
export const PlusProductQuantity = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);
    
    const product = await Product.findById(id);

    const updatedPost = await Product.findByIdAndUpdate(id, { Quantity: product.Quantity + 1 }, { new: true });
    
    res.json(updatedPost);
}