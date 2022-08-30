import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//OTP
import OtpRoute from "./routes/OtpRoute/user_router.js"

// Stores Route
import ProductRoute from "./routes/StoresRoute/Product_route.js";
import ServiceRoute from "./routes/StoresRoute/Service_route.js";
import StaffRoute from "./routes/StoresRoute/Staff_route.js";
import GeneralInfoRoute from "./routes/StoresRoute/General_Info.js";

//Customers Route
import PersonalRoute from "./routes/CustomersRoute/Personal_route.js";
import AddressRoute from "./routes/CustomersRoute/Address_route.js";
import PaymentCardRoute from "./routes/CustomersRoute/PaymentCard_route.js";


import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

//OTP
app.use("/api/", OtpRoute);


// Stores
app.use("/api/", ProductRoute);
app.use("/api/", ServiceRoute);
app.use("/api/", StaffRoute);
app.use("/api/", GeneralInfoRoute);

//Customers
app.use("/api/", PersonalRoute);
app.use("/api/", AddressRoute);
app.use("/api/", PaymentCardRoute);



//Server
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend. http://localhost:8800");
});
