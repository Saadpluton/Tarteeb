import Services from "../../../models/stores/Services.js";


//Product Create
export const createService = async (req, res, next) => {
  const service = new Services(req.body);
  try {
    const savedservice = await service.save();
    res.status(200).json(savedservice);
  } catch (err) {
    next(err);
  }
};

