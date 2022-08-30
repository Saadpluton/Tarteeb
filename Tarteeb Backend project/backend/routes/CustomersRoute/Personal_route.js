import express from "express";

import {createCustomer} from '../../controllers/CustomersController/PersonalController/AddCustomer.js'
import {updateCustomer} from '../../controllers/CustomersController/PersonalController/UpdateCustomer.js'
import {getAllCustomer} from '../../controllers/CustomersController/PersonalController/GetCustomer.js'
import {getCustomer} from '../../controllers/CustomersController/PersonalController/GetOneCustomer.js'
import {SuspendCustomer} from '../../controllers/CustomersController/PersonalController/SuspendCustomer.js'


const router = express.Router();

//CREATE
router.post("/customer", createCustomer);

//UPDATE
router.put("/customer/update/:id", updateCustomer);

//GET One
router.get("/customer/:id", getCustomer);

//GET All
router.get("/customer", getAllCustomer);


//Suspend Customer
router.post("/customer/:id/suspend", SuspendCustomer);

export default router;
