import Personal from "../../../models/customers/Personal.js";

// Customer Get Only Specific Id

export const getCustomer = async (req, res, next) => {
    try {
      const list = await Personal.findById(req.params.id);
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  