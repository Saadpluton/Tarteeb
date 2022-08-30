import express from "express";

import {createStaff} from '../../controllers/StoresContoller/StaffController/AddStaff.js'
import {updateStaff} from '../../controllers/StoresContoller/StaffController/UpdateStaff.js'
import {deleteStaff} from '../../controllers/StoresContoller/StaffController/RemoveStaff.js'
import {getStaff} from '../../controllers/StoresContoller/StaffController/GetStaff.js'
import {SuspendStaff} from '../../controllers/StoresContoller/StaffController/SuspendStaff.js'
import {getAllStaff} from '../../controllers/StoresContoller/StaffController/GetAllStaff.js'


const router = express.Router();

//CREATE
router.post("/staff", createStaff);

//UPDATE
router.put("/staff/update/:id", updateStaff);

//DELETE
router.delete("/staff/delete/:id", deleteStaff);

//GET One
router.get("/staff/:id", getStaff);

//GET All
router.get("/staff", getAllStaff);


//Suspend Staff
router.post("/staff/:id/suspend", SuspendStaff);

export default router;
