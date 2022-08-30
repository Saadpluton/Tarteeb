import Staff from "../../../models/stores/Staff.js";

// Product Get All

export const getAllStaff = async (req, res, next) => {
    try {
      const AllStaff = await Staff.find();
      res.status(200).json(AllStaff);
    } catch (err) {
      next(err);
    }
  };