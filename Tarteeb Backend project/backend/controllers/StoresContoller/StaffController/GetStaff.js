import Staff from "../../../models/stores/Staff.js";

//  Get All Staff

export const getStaff = async (req, res, next) => {
    try {
      const Staffs = await Staff.findById(req.params.id);
      res.status(200).json(Staffs);
    } catch (err) {
      next(err);
    }
  };