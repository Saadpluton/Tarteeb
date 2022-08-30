import Info from "../../../models/stores/General_info.js";


//Strore Update

export const updateStore = async (req, res, next) => {
    try {
      const updateStore = await Info.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateStore);
    } catch (err) {
      next(err);
    }
  };