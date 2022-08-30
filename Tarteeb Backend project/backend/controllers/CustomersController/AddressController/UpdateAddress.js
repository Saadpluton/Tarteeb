import Address from "../../../models/customers/Address.js";

//Address Update

export const updateAddress = async (req, res, next) => {
    try {
      const update= await Address.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(update);
    } catch (err) {
      next(err);
    }
  };