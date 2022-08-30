import Personal from "../../../models/customers/Personal.js";

//Customer Create
export const createCustomer = async (req, res, next) => {
  const customer = new Personal(req.body);
  try {
    const savedcustomer = await customer.save();
    res.status(200).json(savedcustomer);
  } catch (err) {
    next(err);
  }
};

