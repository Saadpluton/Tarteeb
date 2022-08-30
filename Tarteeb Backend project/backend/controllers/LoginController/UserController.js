import bcrypt from "bcrypt";
import _ from 'lodash';
import axios from 'axios';
import otpGenerator from 'otp-generator';


import User  from '../../models/Login/OtpVerification/UserModel.js';
import Otp from '../../models/Login/OtpVerification/OtpModel.js';


export const signup = async (req, res) => {
  try {
    const user = await User.findOne({
        number : req.body.number 

    });

    if(user) return res.status(400).send("User Already registered")
    
    const OTP = otpGenerator.generate(6,{
        digits : true, upperCaseAlphabets : false , lowerCaseAlphabets : false , specialChars : false
    })
    const number = req.body.number;
    console.log(OTP)
    const otp = new Otp({number : number , otp : OTP})
    const salt = bcrypt.genSalt(10)
    otp.otp = await bcrypt.hash(otp.otp , parseInt(salt));
    const result = await otp.save();
    return res.status(200).send("Otp send sucessfully")
  } catch (err) {
    console.log(err);
  }}


  export const otpVerify = async (req, res) => {
    try {
     const otpHolder = await Otp.find({
        number : req.body.number
     })
     if(otpHolder.length === 0) return res.status(400).send("You Use An Expired OTP!")
     const rightOtpFind = otpHolder[otpHolder.length - 1];
     const validuser = await bcrypt.compare(req.body.otp , rightOtpFind.otp)

     if(rightOtpFind.number === req.body.number && validuser)
     {
        const user = new User(_.pick(req.body , ["number"]));
        const token = user.generateJWT();
        const result = await user.save();
        const OTPDelete = await Otp.deleteMany({
            number : rightOtpFind.number
        });
        return res.status(200).send(
            {
                message : "User Registration Sucessfull!",
                token : token ,
                data : result
            }
         )    
     }
     else{
        return res.status(400).send("Your OTP was Wrong !")
     }
    } catch (err) {
      console.log(err);
    }}