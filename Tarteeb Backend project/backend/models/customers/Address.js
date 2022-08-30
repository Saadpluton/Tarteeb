import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({

    Customer_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Nick_Name : {
        type : String ,
        required : true ,
    },
    Location : {
        type : String ,
        required : true ,
    },
    City : {
        type : String ,
        required : true ,
    },
    Country : {
        type : String ,
        required : true ,
    },
});

export default mongoose.model("Address" , AddressSchema)
