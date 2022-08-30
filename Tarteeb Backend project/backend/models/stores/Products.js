import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    Product_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Product_name : {
        type : String ,
        required : true ,
    },
    Brand_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Details : {
        type : String ,
        required : true ,
    },
    Dimensions : {   
        type : Number ,
        required : true ,
    },
    Weight : {
        type : Number ,
        required : true ,
    },
    Quantity : {
        type : Number ,
        default : 0,
    },
    Value_cost : {
        type : Number ,
        required : true ,
    },
    Sub_category_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
});

export default mongoose.model("Product" , ProductSchema)
