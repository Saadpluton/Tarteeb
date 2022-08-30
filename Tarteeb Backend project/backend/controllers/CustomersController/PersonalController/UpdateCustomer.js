import Personal from "../../../models/customers/Personal.js";

//Customer Update

export const updateCustomer = async (req, res, next) => {
    try {
      const updateCustomer = await Personal.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateCustomer);
    } catch (err) {
      next(err);
    }
  };