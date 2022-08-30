import Info from "../../../models/stores/General_info.js";

// Product Get Only Specific Id

export const getStoreOne = async (req, res, next) => {
    try {
      const list = await Info.findById(req.params.id);
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  