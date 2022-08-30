import Address from "../../../models/customers/Address.js";



// Address Delete

export const deleteAddress = async (req, res, next) => {
    try {
      await Address.findByIdAndDelete(req.params.id);
      res.status(200).json("Address has been deleted.");
    } catch (err) {
      next(err);
    }
  };