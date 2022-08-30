import express from "express";

import {createService} from '../../controllers/StoresContoller/ServicesController/AddService.js'
import {updateServices} from '../../controllers/StoresContoller/ServicesController/UpdateService.js'
import {deleteService} from '../../controllers/StoresContoller/ServicesController/RemoveService.js'
import {getService} from '../../controllers/StoresContoller/ServicesController/GetService.js'
import {getjoining_product_and_service} from '../../controllers/StoresContoller/ServicesController/GetJoining.js'
import {getAllServices} from '../../controllers/StoresContoller/ServicesController/GetServices.js'


const router = express.Router();

//CREATE
router.post("/service", createService);

//UPDATE
router.put("/service/update/:id", updateServices);

//DELETE
router.delete("/service/delete/:id", deleteService);

//GET One
router.get("/service/:id", getService);

//GET All
router.get("/service/", getAllServices);

//Joining
router.get("/getservice", getjoining_product_and_service);


export default router;
