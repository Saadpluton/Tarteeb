import Info from "../../../models/stores/General_info.js";

// Get Store

export const getStore = async (req, res, next) => {
    try {
      const store = await Info.find();
      res.status(200).json(store);
    } catch (err) {
      next(err);
    }
  };