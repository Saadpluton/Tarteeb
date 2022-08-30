import mongoose from "mongoose";

const PaymentCardsSchema = new mongoose.Schema({

    Card_Provider : {
        type : String ,
        required : true ,
    },
    Last_4_digits : {
        type : Number ,
        required : true ,
    },
    Expiry : {
        type : Date ,
        required : true ,
    },
    Tokens : {
        type : Number ,
        required : true ,
    },
});

export default mongoose.model("Payment_Cards" , PaymentCardsSchema)
