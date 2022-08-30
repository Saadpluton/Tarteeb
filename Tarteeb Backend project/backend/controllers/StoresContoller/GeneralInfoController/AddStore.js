import Info from "../../../models/stores/General_info.js";


//Store Create
export const createStore = async (req, res, next) => {
  const store = new Info(req.body);
  try {
    const savedstore = await store.save();
    res.status(200).json(savedstore);
  } catch (err) {
    next(err);
  }
};

