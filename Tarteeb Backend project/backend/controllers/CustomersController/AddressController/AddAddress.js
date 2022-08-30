import Address from "../../../models/customers/Address.js";

//Address Create
export const createAddress = async (req, res, next) => {
  const saved = new Address(req.body);
  try {
    const savedaddress= await saved.save();
    res.status(200).json(savedaddress);
  } catch (err) {
    next(err);
  }
};

