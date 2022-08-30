import express from "express";

import {createAddress} from '../../controllers/CustomersController/AddressController/AddAddress.js'
import {updateAddress} from '../../controllers/CustomersController/AddressController/UpdateAddress.js'
import {getAllAddress} from '../../controllers/CustomersController/AddressController/GetAddress.js'
import {getAddress} from '../../controllers/CustomersController/AddressController/GetOneAddress.js'
import {deleteAddress} from '../../controllers/CustomersController/AddressController/RemoveAddress.js'


const router = express.Router();

//CREATE
router.post("/address", createAddress);

//UPDATE
router.put("/address/update/:id", updateAddress);

//GET One
router.get("/address/:id", getAddress);

//GET All
router.get("/address", getAllAddress);


//Delete Address
router.delete("/address/delete/:id", deleteAddress);

export default router;
