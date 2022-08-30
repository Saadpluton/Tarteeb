import Services from "../../../models/stores/Services.js";



// Product Delete

export const deleteService = async (req, res, next) => {
    try {
      await Services.findByIdAndDelete(req.params.id);
      res.status(200).json("Service has been deleted.");
    } catch (err) {
      next(err);
    }
  };