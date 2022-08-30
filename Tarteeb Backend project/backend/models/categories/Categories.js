import mongoose from "mongoose";

const CategoriesSchema  = new mongoose.Schema({

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
});

export default mongoose.model("Categories" , CategoriesSchema)