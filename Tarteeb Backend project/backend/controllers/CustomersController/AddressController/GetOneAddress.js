import Address from "../../../models/customers/Address.js";

// Address Get Only Specific Id

export const getAddress = async (req, res, next) => {
    try {
      const list = await Address.findById(req.params.id);
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  