import express from "express";

import {createStore} from '../../controllers/StoresContoller/GeneralinfoController/AddStore.js'
import {updateStore} from '../../controllers/StoresContoller/GeneralinfoController/UpdateStore.js'
import {SuspendStore} from '../../controllers/StoresContoller/GeneralinfoController/SuspendStore.js'
import {getStore} from '../../controllers/StoresContoller/GeneralinfoController/GetStore.js'
import {updateBankDetails} from '../../controllers/StoresContoller/GeneralinfoController/UpdateBankDetails.js'
import {getStoreOne} from '../../controllers/StoresContoller/GeneralinfoController/GetOneStore.js'


const router = express.Router();

//CREATE
router.post("/info", createStore);

//UPDATE
router.put("/info/update/:id", updateStore);

//UPDATE Bank Details
router.put("/info/updatebanbkdetails/:id", updateBankDetails);

//GET ALL
router.get("/info", getStore);

//GET One
router.get("/info/:id", getStoreOne);


//Suspend Store
router.post("/info/:id/suspend", SuspendStore);

export default router;
