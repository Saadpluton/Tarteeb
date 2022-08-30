import Staff from "../../../models/stores/Staff.js";

// Staff Delete

export const deleteStaff = async (req, res, next) => {
    try {
      await Staff.findByIdAndDelete(req.params.id);
      res.status(200).json("Staff has been deleted.");
    } catch (err) {
      next(err);
    }
  };