import express from "express";

import {createProduct} from '../../controllers/StoresContoller/ProductController/AddProduct.js'
import {updateProduct} from '../../controllers/StoresContoller/ProductController/UpdateProduct.js'
import {deleteProduct} from '../../controllers/StoresContoller/ProductController/RemoveProduct.js'
import {getProduct} from '../../controllers/StoresContoller/ProductController/GetOneProduct.js'
import {getAllProduct} from '../../controllers/StoresContoller/ProductController/GetProducts.js'
import {SubtractProductQuantity , PlusProductQuantity} from '../../controllers/StoresContoller/ProductController/SubtractProdQuantity.js'


const router = express.Router();

//CREATE
router.post("/product", createProduct);

//UPDATE
router.put("/product/update/:id", updateProduct);

//DELETE
router.delete("/product/delete/:id", deleteProduct);

//GET ALL
router.get("/product", getAllProduct);

//GET ONE
router.get("/product/:id", getProduct);

//Subtract Quantity
router.patch('/product/:id/SubtractProduct', SubtractProductQuantity);

//Plus Quantity
router.patch('/product/:id/PlusProduct', PlusProductQuantity);

export default router;
