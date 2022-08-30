import mongoose from "mongoose";

const SubCategoriesSchema  = new mongoose.Schema({

    Title : {
        type : String ,
        required : true ,
    },
    icons : {
        type : String ,
        required : true ,
    },
    Image : {
        type : String ,
        required : true ,
    },
    Category_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    Sub_Category_Id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
});

export default mongoose.model("Sub_Categories" , SubCategoriesSchema)