import Staff from "../../../models/stores/Staff.js";


// Store Delete

export const SuspendStaff = async (req, res, next) => {
    const {id} = req.params ;
    
    try {
    
      const staff = await Staff.findById(id);

      const Suspend = await Staff.findByIdAndUpdate(id, { isSuspend: staff.isSuspend = true }, { new: true });
      
      res.status(200).json("Staff has been Suspend.");
    } catch (err) {
      next(err);
    }
  };