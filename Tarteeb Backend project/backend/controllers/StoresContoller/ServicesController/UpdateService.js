import Services from "../../../models/stores/Services.js";


//Product Update

export const updateServices = async (req, res, next) => {
    try {
      const update = await Services.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(update);
    } catch (err) {
      next(err);
    }
  };