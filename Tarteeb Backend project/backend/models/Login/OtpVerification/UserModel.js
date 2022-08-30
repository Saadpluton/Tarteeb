import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({

    number : {
        type : String ,
        required : true ,
    }

},{timestamps : true}
);


UserSchema.methods.generateJWT = function(){
    const token = jwt.sign({
        _id : this._id ,
        number : this.number,
    } , process.env.JWT , {expiresIn : "7d"});
    return token

}
export default mongoose.model("User" , UserSchema)
