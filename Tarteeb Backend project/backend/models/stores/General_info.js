import mongoose from "mongoose";

const GeneralInfoSchema = new mongoose.Schema({
    
    Name : {
        type : String ,
        required : true ,
    },
    Location: {
        type : String ,
        required : true ,
    },
    Segment_male_or_female : {
        type : String ,
        required : true ,
    },
    Category_id : {   
        type : Number ,
        required : true ,
        unique : true ,
    },
    CR_number : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Bank_account : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Bank_name : {
        type : String ,
        required : true ,
    },
    isSuspend : {
        type : Boolean ,
        default : false ,
    },
    
});

export default mongoose.model("General_info" , GeneralInfoSchema)
