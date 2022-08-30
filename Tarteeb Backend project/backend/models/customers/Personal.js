import mongoose from "mongoose";

const PersonalSchema = new mongoose.Schema({

    Customer_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    First_Name : {
        type : String ,
        required : true ,
    },
    Last_Name : {
        type : String ,
        required : true ,
    },
    Email : {
        type : String ,
        required : true ,
    },
    Phone : {   
        type : Number ,
        required : true ,
    },
    Join_date : {
        type : Date ,
        required : true ,
    },
    isSuspend : {
        type : Boolean,
        default : false ,
    },
});

export default mongoose.model("Personal" , PersonalSchema)
