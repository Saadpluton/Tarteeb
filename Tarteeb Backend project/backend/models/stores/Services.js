import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({

    Product_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Service_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Service_Title : {
        type : String ,
        required : true ,
    },
    Description: {
        type : String ,
        required : true ,
    },
    Duration : {
        type : Number ,
        required : true ,
    },
    Staff_Id : {   
        type : Number ,
        required : true ,
        unique : true ,
    },
    Value_Or_Cost : {
        type : Number ,
        required : true ,
    },
    Sub_Category_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Segment_male_or_female : {
        type : String ,
        required : true ,
    },
    Attributes : {
        type : String ,
    },
});

export default mongoose.model("Service" , ServiceSchema)
