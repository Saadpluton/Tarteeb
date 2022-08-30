import express from "express";
import {signup , otpVerify} from "../../controllers/LoginController/UserController.js";
const router = express.Router();

router.route('/signup').post(signup)
router.route('/signup/verify').post(otpVerify)


export default router;