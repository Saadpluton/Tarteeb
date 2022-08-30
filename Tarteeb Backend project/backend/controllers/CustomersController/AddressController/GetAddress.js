import Address from "../../../models/customers/Address.js";

// Get All Address

export const getAllAddress = async (req, res, next) => {
    try {
      const AllAddress = await Address.find();
      res.status(200).json(AllAddress);
    } catch (err) {
      next(err);
    }
  };