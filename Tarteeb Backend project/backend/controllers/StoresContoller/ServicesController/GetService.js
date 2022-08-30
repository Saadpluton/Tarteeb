import Services from "../../../models/stores/Services.js";

// Get Service

export const getService = async (req, res, next) => {
  try {
    const list = await Services.findById(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};