import Staff from "../../../models/stores/Staff.js";

//Staff Update

export const updateStaff = async (req, res, next) => {
    try {
      const updateStaff= await Staff.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateStaff);
    } catch (err) {
      next(err);
    }
  };