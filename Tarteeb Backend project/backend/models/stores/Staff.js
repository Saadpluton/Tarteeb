import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
    
    First_Name : {
        type : String ,
        required : true ,
    },
    Last_Name : {
        type : String ,
        required : true ,
    },
    Gender : {
        type : String ,
        required : true ,
    },
    Speciality : {
        type : String ,
        required : true ,
    },
    Staff_id : {   
        type : Number ,
        required : true ,
        unique : true ,
    },
    Mobile_number : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    isSuspend : {
        type : Boolean,
        default : false,
    },
});

export default mongoose.model("Staff" , StaffSchema)
