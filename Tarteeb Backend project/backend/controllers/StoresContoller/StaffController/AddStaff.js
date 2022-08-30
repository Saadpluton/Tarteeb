import Staff from "../../../models/stores/Staff.js";


// Staff Create

export const createStaff = async (req, res, next) => {
  const staff = new Staff(req.body);
  try {
    const savedstaff = await staff.save();
    res.status(200).json(savedstaff);
  } catch (err) {
    next(err);
  }
};

