import Personal from "../../../models/customers/Personal.js";

// Get All Customers

export const getAllCustomer = async (req, res, next) => {
    try {
      const AllCustomers = await Personal.find();
      res.status(200).json(AllCustomers);
    } catch (err) {
      next(err);
    }
  };